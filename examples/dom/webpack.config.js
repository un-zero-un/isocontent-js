const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
    .setOutputPath('build')
    .setPublicPath('/')
    .addEntry('app', './src/index.js')
    .cleanupOutputBeforeBuild()
    .enableReactPreset()
    .disableSingleRuntimeChunk()
    .addPlugin(new HtmlWebpackPlugin({ template: './src/index.html.ejs' }))
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
;

module.exports = Encore.getWebpackConfig();
