# Next.js Example

- :leftwards_arrow_with_hook: babel - converts ECMAScript 2015+ into a backwards compatible version of JavaScript
- :ok_hand: eslint - ensures code quality
- :nail_care: prettier - maintains consistent code formatting styles
- :dog: husky & lint-staged - utilise the pre-commit hook to fail fast and early


## Getting Started

This repository has been set up as a template repository so any new project can use this as a starting point by following the official GitHub documentation for [Creating a repository from a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

### Standard command line

Having created a new repository from this template, the standard commands can be used

```bash
$ git clone https://github.com/<username>/<repository-name>
$ cd <repository-name>
$ yarn install
```


## Structure

Repository structure explained:

```
public
src/
  components
  pages
.eslint.json                  // eslint configuration
.gitignore                    // default GitHub gitignore file
.prettier.json                // prettier configuration
babel.config.json             // babel configuration
LICENSE                       // root MIT license file used by GitHub
next.config.js                // next configuration
package.json                  // package configuration with all dependencies, devDependencies and scripts
README.md                     // standard root information
yarn.lock                     // standard lockfile containing package install information
```


## Development

This is essentially a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
yarn dev
```

The addition of [ESLint](https://eslint.org/), with relevant rules akin to those found in [`create-react-app`](https://github.com/facebook/create-react-app), and [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) allows the development server to warn about common mistakes.


## Code Formatting

This example utilises [Prettier](https://prettier.io/) in order to provide a consistent coding style across the project. The config file is purposely left empty so that you can add your own options that suit your style preferences. 

Following the guidance provided by [Prettier](https://prettier.io) on [integrating with linters](https://prettier.io/docs/en/integrating-with-linters.html), a pre-made config [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) has been included that turns off all rules that are unnecessary or might conflict.

### Pre-commit Hook

In order to avoid having to manually run a script before each commit to format code, there is a pre-commit hook tool configured that will re-format the relevant files that are marked as "staged" via `git add` before a commit.

Following [pre-commit documentation](https://prettier.io/docs/en/precommit.html), this repository uses [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged), along with a configuration in the project's `package.json`, that will automatically format supported files in a pre-commit hook.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).