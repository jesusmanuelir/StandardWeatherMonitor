const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              },
            },
          },
          {
            test: /\.html$/,
            use: {
              loader: 'html-loader',
            },
          },
          {          
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
    
        {
          test: /\.(png|jpeg|gif|jpg)$/,
          use: [
            {
              loader: 'file-loader',
              options: { name: 'assets/[hash].[ext]' },
            }
          ],
        },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
        }),
      ],
}