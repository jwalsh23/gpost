const path = require('path')

const commonConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.test.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    typeCheck: true,
                    emitErrors: true
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
    }
}

module.exports = Object.assign(
    {
        entry: { main: './src/main.ts'}
    },
    commonConfig
)