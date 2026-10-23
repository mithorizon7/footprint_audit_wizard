#!/usr/bin/env bash
# Replit's Node 22 module may lag the security baseline. Never fall back to it.
set -euo pipefail
root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
version="22.23.4"
archive="node-v${version}-linux-x64.tar.xz"
checksum="1805bcd35e6815559bd2eb97db438d3fdb0eb3a5e6a977b7c1badca76337e9ce"
runtime="$root/.cache/node-runtime/node-v${version}-linux-x64"
if [[ "$(uname -s)" != Linux || "$(uname -m)" != x86_64 ]]; then
  echo "The pinned Replit runtime requires Linux x86_64; refusing an unverified runtime." >&2
  exit 1
fi
if [[ ! -x "$runtime/bin/node" ]]; then
  mkdir -p "$(dirname -- "$runtime")"
  staging="$(mktemp -d "$(dirname -- "$runtime")/.download.XXXXXXXX")"
  trap 'rm -rf -- "$staging"' EXIT
  curl --fail --silent --show-error --location --proto '=https' --tlsv1.2 \
    "https://nodejs.org/dist/v${version}/${archive}" -o "$staging/$archive"
  printf '%s  %s\n' "$checksum" "$staging/$archive" | sha256sum --check --status
  tar -xJf "$staging/$archive" -C "$staging"
  mv "$staging/node-v${version}-linux-x64" "$runtime"
  rm -rf -- "$staging"
  trap - EXIT
fi
export PATH="$runtime/bin:$PATH"
if [[ "$(node --version)" != "v${version}" ]]; then
  echo "Pinned runtime verification failed." >&2
  exit 1
fi
cd "$root"
exec "$@"
