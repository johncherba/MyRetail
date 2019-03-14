// add to webpack if eject create-react-app, see package.json and read warnings for npm eject

module.exports = {
    module: {
        rules: [{
            test: /\.less$/,
            loader: 'less-loader' // compiles Less to CSS
        }]
    }
};