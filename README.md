# Jascript Development Environment

This is a development environment for Jascript. It is a work in progress as taught in the Buidling a Jascript Development Environment course on [Building a Jascript Development Environment](https://www.pluralsight.com/courses/building-javascript-development-environment).

## Table of Contents

1. [Getting Started](#getting-started)
2. [Whats Included](#whats-included)

## Getting Started

### Why this project?

This project is a starting point for building a Jascript development environment.

Why you need a starter kit!

- Reduce decision fatigue
- Right things become easy
- Codifies lessons learned
- Provides a solid foundation
- Rapid feedback
- Automated checklist for new projects

### How to use this project

1. Clone this repo
2. `npm install`
3. `npm start`

## What's included

- [NPM](https://www.npmjs.com/) for package management
- [localtunnel](https://localtunnel.github.io/www/) for sharing your local dev server
- [Babel](https://babeljs.io/) for transpiling Jascript
- [ESLint](http://eslint.org/) for linting Jascript
- [Mocha](https://mochajs.org/) for testing
- [Chai](http://chaijs.com/) for assertions
- [webpack](https://webpack.github.io/) for bundling
- [Express](http://expressjs.com/) for a development web server
- [Open](https://www.npmjs.com/package/open) to open the web browser
- [npm-run-all](https://www.npmjs.com/package/npm-run-all) to run multiple npm scripts in parallel or sequential
- [chalk](https://www.npmjs.com/package/chalk) for console logging
- [compression](https://www.npmjs.com/package/compression) for gzip compression
- [cross-env](https://www.npmjs.com/package/cross-env) for setting environment variables across platforms
- [jsdom](https://www.npmjs.com/package/jsdom) for testing in a headless browser

run `npm audit` to check for vulnerabilities in the packages and run `npm audit fix` to fix them. You can also run  `npm outdated` to check for outdated packages and run `npm update` to update them.

### localTunnel Commands

- `lt --port` - Port to forward to
- `--subdomain` - Subdomain to use and incluid with your temp domain
