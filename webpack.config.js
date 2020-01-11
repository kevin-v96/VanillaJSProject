const path = require('path');
const customPlugin = require(path.join(__dirname, 'customPlugin.js'));

const config = {
    context: __dirname,
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader', path.join(__dirname, 'loader.js')]
            },
        ]
    },
    plugins: [
        new customPlugin({ options: true })
    ],
}

module.exports = (env, argv) => {
    if(argv.development) {
        config.mode = 'development'
        config.devtool = 'source-map'
    }
    else {
        config.mode = 'production'
    }

    return config;
}