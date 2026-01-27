import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const ROOTS = [
  path.resolve("client/src/pages"),
  path.resolve("client/src/components/wizard"),
];

const LETTER_REGEX = /\p{L}/u;
const ATTR_NAMES = new Set(["aria-label", "title", "placeholder", "alt", "label"]);

const collectFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath));
    } else if (entry.isFile() && fullPath.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }
  return files;
};

const shouldIgnoreLine = (lines, lineNumber) => {
  const line = lines[lineNumber] ?? "";
  const prevLine = lines[lineNumber - 1] ?? "";
  return line.includes("i18n-ignore") || prevLine.includes("i18n-ignore");
};

const report = [];
const files = ROOTS.flatMap((root) => (fs.existsSync(root) ? collectFiles(root) : []));

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const lines = content.split(/\r?\n/);

  const addIssue = (node, text) => {
    const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    if (shouldIgnoreLine(lines, line)) return;
    report.push({
      file,
      line: line + 1,
      col: character + 1,
      text,
    });
  };

  const checkText = (node, text) => {
    const trimmed = text.replace(/\s+/g, " ").trim();
    if (!trimmed) return;
    if (!LETTER_REGEX.test(trimmed)) return;
    addIssue(node, trimmed);
  };

  const visit = (node) => {
    if (ts.isJsxText(node)) {
      checkText(node, node.getText());
    }

    if (ts.isJsxExpression(node) && node.expression && ts.isStringLiteralLike(node.expression)) {
      checkText(node, node.expression.text);
    }

    if (ts.isJsxAttribute(node) && node.initializer) {
      const name = node.name.getText();
      if (!ATTR_NAMES.has(name)) {
        ts.forEachChild(node, visit);
        return;
      }
      if (ts.isStringLiteral(node.initializer)) {
        checkText(node, node.initializer.text);
      } else if (ts.isJsxExpression(node.initializer) && node.initializer.expression) {
        const expr = node.initializer.expression;
        if (ts.isStringLiteralLike(expr)) {
          checkText(node, expr.text);
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
}

if (report.length > 0) {
  console.error("i18n lint found hard-coded strings:");
  for (const issue of report) {
    console.error(`- ${issue.file}:${issue.line}:${issue.col} -> "${issue.text}"`);
  }
  process.exit(1);
}

console.log("i18n lint passed.");
