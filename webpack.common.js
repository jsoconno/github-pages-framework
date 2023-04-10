const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static/markdown', to: 'static/markdown' },
        { from: 'static/content.json', to: 'static/content.json' },
      ],
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    }),
    // new SWPrecacheWebpackPlugin({
    //     cacheId: 'documentation',
    //     filename: 'service-worker.js',
    //     staticFileGlobs: ['dist/**/*.{js,html,css}'],
    //     minify: true,
    //     stripPrefix: 'dist/'
    //   })
  ],
  output: {
    filename: 'static/js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                {
                loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'sass-loader',
            ],
        },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    alias: {
        '@': path.resolve(__dirname, 'src'),
    },
    extensions: [".*",".js",".vue",".json"]
  },
};
