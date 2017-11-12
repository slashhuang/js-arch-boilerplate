const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const baseWebpackPlugin = require('./base.config.js');
const plugins = baseWebpackPlugin.plugins;
const newPlugins = plugins.concat([new UglifyJSPlugin()]);
module.exports = Object.assign({},
    baseWebpackPlugin,
    {
        plugins: newPlugins,
    });
