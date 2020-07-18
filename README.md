# PWA-boilerplate [![Build status](https://dev.azure.com/digiclowns/PWA-boilerplate/_apis/build/status/PWA-boilerplate-CI)](https://dev.azure.com/digiclowns/PWA-boilerplate/_build/latest?definitionId=2)
Based on Jad Joubran's repo pwa-series (https://github.com/jadjoubran/pwa-series) videos.

A demo of the latest version of this project is always available on Netlify: https://pwa-boilerplates.netlify.app/.

This repo now employs a scripted push of the build-artifacts to a specific branch used to publish to [GitHub Pages](https://pages.github.com) from. Automated with [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).
Read more on this in:
- Using Git Worktree to Deploy GitHub Pages: https://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html
- Including Hooks in a Git Repository: https://www.darrenlester.com/blog/including-hooks-in-a-git-repository

How to try out the code on your local machine:
1. Clone the repo.
1. Run `npm install`.
1. Start a local server with `npx serve` or use `npm run dev` for hot reload.