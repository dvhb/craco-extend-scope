# Craco extend scope plugin

By default [create-react-app](https://facebook.github.io/create-react-app/) don't allow you to import modules outside of
 `/src` dir, it throws error like this:
`Relative imports outside of src/ are not supported`. This plugin extends CRA config to add custom paths to
 [ModuleScopePlugin](https://github.com/facebook/create-react-app/tree/master/packages/react-dev-utils#new-modulescopepluginappsrc-string--string-allowedfiles-string).

## Supported Versions

`craco-less` is tested with:

- `react-scripts`: `^2.1.5`
- `@craco/craco`: `^3.5.0`

## Installation

First, follow the [`craco` Installation Instructions](https://github.com/sharegate/craco/blob/master/packages/craco/README.md##installation)
to install the `craco` package, create a `craco.config.js` file, and modify the scripts in your `package.json`.

Then install `craco-less`:

```bash
$ npm i @dvhb/craco-extend-scope

# OR

$ yarn add @dvhb/craco-extend-scope
```

## Usage

Here is a complete `craco.config.js` configuration file that extends scope of `create-react-app`:

```js
const cracoExtendScope = require('./craco-extend-scope');

module.exports = {
  plugins: [{ plugin: cracoExtendScope, options: { path: 'static' } }]
};
```

Now you can use absolute import in you code like this:
```js
import 'static/styles.css';
```
