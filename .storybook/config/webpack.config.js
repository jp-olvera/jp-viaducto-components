const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: [/(node_modules|build|dist|__tests__)/],
        use: {
          loader: 'ts-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react'],
          // },
        },
      },
      {
        test: /\.css$/,
        exclude: [/(node_modules|build|dist|__tests__)/],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        exclude: [/(node_modules|build|dist|__tests__)/],
        use: ['url-loader'],
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'styled-components',
    },
    'react-toast-notifications': {
      commonjs: 'react-toast-notifications',
      commonjs2: 'react-toast-notifications',
      amd: 'react-toast-notifications',
      root: 'react-toast-notifications',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
      'styled-components': path.resolve(
        __dirname,
        '../node_modules/styled-components',
      ),
      'react-toast-notifications': path.resolve(
        __dirname,
        '../node_modules/react-toast-notifications',
      ),
      'ballena-types': path.resolve(__dirname, './src/ballena-types'),
    },
  },
};
