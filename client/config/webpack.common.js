const paths = require('./paths');

module.exports = {
    target: 'web',
    entry: [
        paths.appIndexJs
    ],
    resolve: {
        mainFields: ['browser', 'main', 'module'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            app: paths.appSrc
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [
                    paths.appSrc,
                ],
                use: [{
                    loader: 'babel-loader',
                }]
            }
        ]
    }
}