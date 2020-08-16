# PWA-boilerplate [![Build status](https://dev.azure.com/digiclowns/PWA-boilerplate/_apis/build/status/PWA-boilerplate-CI)](https://dev.azure.com/digiclowns/PWA-boilerplate/_build/latest?definitionId=2)
Based on Jad Joubran's repo pwa-series videos (https://github.com/jadjoubran/pwa-series).

The basic idea behind this repo is, that any feature to the repository and the resulting PWA can be studied by looking at the specific commit(s). Thus providing a running course in setting up your PWA and the automation from the committed code. 

## How to try out the code on your own machine.
Prerequisites:
- [Git code versioning system installed](https://git-scm.com/download/)
- [Node.js and NPM installed](https://docs.npmjs.com/getting-started/configuring-your-local-environment)
- A text/code editor
- A browser to test your work in

1. Clone this repo.
1. Run `npm install`.
1. Start a local server with `npx serve` or use `npm run dev` for hot reload.

## Live demos
A demo site of the latest version of this project is hosted on both Netlify at https://pwa-boilerplates.netlify.app/ and GitHub Pages at https://rroodselaar.github.io/PWA-boilerplate/.

### Netlify
The folks at [Netlify](https://www.netlify.com) supply various ways to automatically deploy using Git Integration and a neat [CLI](https://docs.netlify.com/cli) global tool.

### GitHub Pages
This repo now employs a scripted push of the build-artifacts to a specific branch used to publish to [GitHub Pages](https://pages.github.com) from. Automated with [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).
Read more on this in:
- Using Git Worktree to Deploy GitHub Pages: https://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html
- Including Hooks in a Git Repository: https://www.darrenlester.com/blog/including-hooks-in-a-git-repository

To use the Git Hook-strategy with this repo, simply run `git config core.hooksPath .githooks` from the console in the root of your local copy.
