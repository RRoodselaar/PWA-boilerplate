# PWA-boilerplate [![Build status](https://dev.azure.com/digiclowns/PWA-boilerplate/_apis/build/status/PWA-boilerplate-CI)](https://dev.azure.com/digiclowns/PWA-boilerplate/_build/latest?definitionId=2)
Based on Jad Joubran's repo pwa-series videos (https://github.com/jadjoubran/pwa-series).

The basic idea behind this repo is, that any feature to the repository and the resulting PWA can be studied by looking at the specific commit(s). Thus providing a running course in setting up your PWA and the automation from the committed code. 

## How to try out the code on your own machine
Prerequisites:
- [Git code versioning system installed](https://git-scm.com/download/)
- [Node.js and NPM installed](https://docs.npmjs.com/getting-started/configuring-your-local-environment)
- A text/code editor
- A browser to test your work in

1. Clone this repo.
1. Run `npm install`.
1. Start a local server with `npx serve` or use `npm run dev` for hot reload.
1. Customize the source files in folder "src".
1. Add your own splash icons by providing an image on https://realfavicongenerator.net.

## Live demos
A demo site of the latest version of this project is hosted on both Netlify at https://pwa-boilerplates.netlify.app/ and GitHub Pages at https://rroodselaar.github.io/PWA-boilerplate/.

### Netlify
The folks at [Netlify](https://www.netlify.com) supply various ways to automatically deploy using Git Integration and a neat [CLI](https://docs.netlify.com/cli) global tool.

### GitHub Pages
This repo now employs a scripted push of the build-artifacts to a specific branch used to publish to [GitHub Pages](https://pages.github.com) from. Automated with [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).
Read more on this in:
- Using Git Worktree to Deploy GitHub Pages: https://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html
- Including Hooks in a Git Repository: https://www.darrenlester.com/blog/including-hooks-in-a-git-repository

To use the Git Hook-strategy with this repo, simply
- apply execution rights to the Git hook file `chmod +x .githooks/<hook filename>` and
- run `git config core.hooksPath .githooks` from the console in the root of your local copy.

## Lighthouse integration
The Lighthouse Badge above is generated using [Emanuele Mazzotta's Lighthouse Badges repo: https://github.com/emazzotta/lighthouse-badges](https://github.com/emazzotta/lighthouse-badges).

These badges are automatically generated before when committing into the master branch of this repository. This is done using the above mentioned Git Hook modification in conjunction with the Netlify CLI to run in a temporary deployment of the application on Netlify to enjoy all the benefits of TLS and other prerequisites for successful hosting of a PWA.

1. install Lighthouse Badges from NPM `npm i -g lighthouse-badges`
1. install the global tool `npm install netlify-cli -g`
1. run `netlify deploy --open` once to link it to your account and see its behavior
1. install JSON toolkit globally to parse output `npm install -g json-cli-toolkit`
