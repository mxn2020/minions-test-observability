# minions-test-observability

**Trace capture, tool call logs, reasoning timings, and latency breakdowns**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-test-observability/sdk minions-sdk

# Python
pip install minions-test-observability

# CLI (global)
npm install -g @minions-test-observability/cli
```

---

## CLI

```bash
# Show help
test-observability --help
```

---

## Python SDK

```python
from minions_test_observability import create_client

client = create_client()
```

---

## Project Structure

```
minions-test-observability/
  packages/
    core/           # TypeScript core library (@minions-test-observability/sdk on npm)
    python/         # Python SDK (minions-test-observability on PyPI)
    cli/            # CLI tool (@minions-test-observability/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [test-observability.minions.help](https://test-observability.minions.help)
- Blog: [test-observability.minions.blog](https://test-observability.minions.blog)
- App: [test-observability.minions.wtf](https://test-observability.minions.wtf)

---

## License

[MIT](LICENSE)
