const webpack = require('webpack');
module.exports = function() {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    unused: true,
                    dead_code: true, // big one--strip code that will never execute
                    warnings: false, // good for prod apps so users can't peek behind curtain
                    drop_debugger: true,
                    conditionals: true,
                    evaluate: true,
                    // drop_console: false, // strips console statements
                    drop_console: true, // strips console statements
                    sequences: true,
                    booleans: true,
                },
                output: {
                    beautify: false,
                    comments: false
                }
            })
        ]
    };
};

