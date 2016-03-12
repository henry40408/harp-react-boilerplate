module.exports = {
    entry: "./_javascripts/entry.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015"]
            }
        }]
    }
};
