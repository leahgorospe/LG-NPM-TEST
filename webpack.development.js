const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const bundleOutputDir = './dist';

//This webpack will output;
// * A non minified main.js file containing all the main app code
//      * With reference to a vendor.js file for npm packages
// * Inlined non minified css in the dom
// * Font and image files

module.exports = merge(common, {
    mode: 'development',
    //inline the source maps for debuggin and load up a webpack dev server
    devtool: 'inline-source-map',
    //Output a plain main.js file, no cache busting
    output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: '[name].js',
        publicPath: '/dist/'
    }
});