const [major, minor, patch] = process.versions.node.split('.').map(Number);
if (major !== 22 || minor < 23 || (minor === 23 && patch < 4)) {
  console.error(
    'This project requires Node 22.23.4 or a newer patched Node 22 release. Run nvm install && nvm use.',
  );
  process.exit(1);
}
