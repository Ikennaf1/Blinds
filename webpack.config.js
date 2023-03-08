const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    output: {
        filename: 'blinds.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
};
