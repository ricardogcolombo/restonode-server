const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry:{main: './src/index.js'},
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js'
  },
  watch:true,
  target: 'node',
  devtool: 'source-map',
  node: {
    __filename: false,
    __dirname: false
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ]
};
