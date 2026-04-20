# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Chaitanya Joglekar, hosted on GitHub Pages. Built with Vite + React (JavaScript). The portfolio aggregates professional data from multiple sources:
- Personal GitHub projects (via GitHub API)
- Corporate GitLab projects (via `glab` CLI)
- Jira tickets/stories (via ai-dotfiles Jira toolkit)

**Live site:** https://chaitu25.github.io/portfolio

## Commands

- `npm run dev` — start Vite dev server (http://localhost:5173/portfolio/)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — ESLint
- `npm run deploy` — build + push to `gh-pages` branch (legacy, prefer GitHub Actions)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`. Can also be triggered manually via `workflow_dispatch`.

**Important:** `vite.config.js` sets `base: '/portfolio/'` — all asset paths are relative to this subpath. This must match the GitHub Pages URL.

## Architecture

Single-page React app with no routing. `App.jsx` composes section components rendered top-to-bottom:

`Navbar → Hero → About → Experience → Skills → Projects → Education → Contact → Footer`

Each component is self-contained in `src/components/` with its own data (no external data fetching at runtime). All content — experience details, skills, project lists — is hardcoded as JavaScript objects within each component.

**Styling:** `src/index.css` has CSS custom properties (design tokens) and global resets. `src/App.css` has all component styles using BEM-like naming (e.g., `.experience__card`, `.skills__tag`). No CSS modules or preprocessors.

## Interacting with External Sources

1. Always use the `jira` skill to interact with Jira.
2. Always access corporate GitLab repos using the `glab` skill or `glab` CLI tool. The corporate GitLab instance is `gitlab.dell.com`.
3. Always use the GitHub API to interact with the personal GitHub account for personal projects.

## Content Guidelines

1. Focus on broader technical skills that can be highlighted in a professional portfolio — don't enumerate every technical detail from a project or Jira story.
2. When reviewing Jira stories, also examine linked epics to understand the bigger picture.
3. Use professional language when describing technical knowledge, skills, and achievements.
4. Summary and About me section should not contain too many low-level technical terms , instead it should be the consise summary of overall expereince.
