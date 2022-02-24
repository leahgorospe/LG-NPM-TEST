module.exports = {
    //Entry points in to the app, main for the main spa application and mini for the stand alone pages
    entry: {
        'main': './index.ts'
    },
    resolve: {
        //Load up our typescript and make use of our paths setup in the tsconfig.json file
        extensions: ['.js', '.ts'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {

                    name: "vendor", // part of the bundle name and
                    // can be used in chunks array of HtmlWebpackPlugin
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            //Use the typescript loader to load in our ts files
            {
                test: /\.ts$/, use: [{ loader: 'ts-loader' }]
            }
        ]
    }
};