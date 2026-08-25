[![Coverage Status](https://coveralls.io/repos/github/uw-it-aca/solstice-docs/badge.svg?branch=develop)](https://coveralls.io/github/uw-it-aca/solstice-docs?branch=develop)

# uxdesign-guides

Solstice Design System

## Development

```bash
npm install
npm run dev
```

### Testing

Run the test suite with [Vitest](https://vitest.dev/):

```bash
# Run tests in watch mode
npm test

# Run tests once with a coverage report
npm run coverage
```

### Linting

Lint the codebase with [oxlint](https://oxc.rs/docs/guide/usage/linter):

```bash
# Report lint issues
npm run oxlint

# Automatically fix fixable lint issues
npm run oxlint:fix
```

### Formatting

Format the codebase with [oxfmt](https://oxc.rs/docs/guide/usage/formatter):

```bash
# Format files in place
npm run oxfmt

# Check formatting without writing changes
npm run oxfmt:check
```

## Deployment

Pushes to `main` trigger GitHub Actions, which build with Vite and deploy to `depts.washington.edu/ux/` via SCP.

### SSH Key Setup (one-time)

**Generate a deploy key on your local machine (no passphrase):**

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_deploy -N ""
```

**Copy the public key to the remote server:**

```bash
ssh-copy-id -i ~/.ssh/id_ed25519_deploy.pub ux@ovid.u.washington.edu
```

**Add to GitHub Secrets** (repo → Settings → Secrets and variables → Actions):

| Secret            | Value                                    |
| ----------------- | ---------------------------------------- |
| `SSH_HOST`        | `ovid.u.washington.edu`                  |
| `SSH_USER`        | `ux`                                     |
| `SSH_PRIVATE_KEY` | Output of `cat ~/.ssh/id_ed25519_deploy` |

**Verify locally:**

```bash
ssh -T ux@ovid.u.washington.edu
```

Should connect without a password prompt.

### Remote Server

- Web root: `/rc00/d87/ux` (symlinked from `~/public_html`)
- Site URL: https://depts.washington.edu/ux/
- Vanity URL: https://uxdesign.uw.edu/

### Vite Base Path

The `base` option in `vite.config.js` must match the subpath on the server (`/ux/`).
