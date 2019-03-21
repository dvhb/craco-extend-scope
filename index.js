const path = require('path');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions, context: { paths } }) => {
    const absolutePath = path.join(paths.appPath, pluginOptions.path);
    const moduleScopePlugin = webpackConfig.resolve.plugins.find(plugin => plugin.appSrcs && plugin.allowedFiles);

    if (moduleScopePlugin) {
      moduleScopePlugin.appSrcs.push(absolutePath);
    }

    webpackConfig.resolve.alias = Object.assign(webpackConfig.resolve.alias, {
      [pluginOptions.path]: absolutePath,
    });

    return webpackConfig;
  },
};
