# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website hosted on GitHub Pages. The portfolio aggregates data from multiple sources:
- Personal GitHub projects and account activity
- Corporate GitLab projects
- Jira tickets/stories

**Current state:** Early-stage — no tech stack has been chosen and no source code exists yet.

## Repository

- Remote: `https://github.com/chaitu25/portfolio.git`
- Branch: `main`
- Deployment target: GitHub Pages

## When Starting Implementation

Since no stack has been chosen, key decisions that will need to be made first:
1. **Framework** — static HTML/CSS/JS, or a generator like Next.js / Astro / Hugo
2. **Data aggregation** — how to pull from GitHub API, GitLab API, and Jira API (build-time vs. runtime)
3. **Deployment** — GitHub Actions workflow to build and push to `gh-pages` branch (or `docs/` folder)

Once a stack is chosen, update this file with build, dev, lint, and test commands.

## Instruction Regarding Interacting with External Sources.
1. Always use 'jira' skill available to interact with Jira.
2. Always access/interact corporate Gitlab repo using 'glab' skill or directly using glab cli tool.
3. Always use Github API to interact with personal Github account to look for personal projects.


## Additional Instructions
1. Don't focus on every single technical detail in a git/gitlab project or in Jira story or epics. Always focus on braoder tehnical skills in it which can be highlighted in a professional portfolio.
2. When looking at Jira stories also look at the epics linked to it to get the bigger picture.
3. Use professional language while descrbing technical knowledge , skills , learning and other achievements on the portfolio. 
