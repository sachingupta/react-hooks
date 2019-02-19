var path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"]
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        filename: 'index.html',
        compress: true,
        port: 9000,
        historyApiFallback: {
            index: 'index.html'
          },
        open: true,
        inline: true,
        hot: true,
        noInfo: true
    },

    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.css$/,
                include: path.join(__dirname, "src/components"),
                use: [
                    "style-loader",
                    {
                        loader: "typings-for-css-modules-loader",
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true
                        }
                    }
                ]
            },

            {
                enforce: "pre",
                test: /\.scss$/,
                include: path.join(__dirname, "src/components"),
                use: [
                    "style-loader",
                    {
                        loader: "typings-for-css-modules-loader",
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};