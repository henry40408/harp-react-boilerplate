module.exports = {
    context: __dirname + "/_javascripts",
    entry: "./entry",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!postcss-loader"
        }]
    },
    postcss: function() {
        return [require("autoprefixer"), require("precss")];
    }
};
