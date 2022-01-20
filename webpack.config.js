import path from 'path';
'path';



export default {
  mode: 'production',
  entry: {
    script: './src/script.js',
    // signup: './src/signup.test.js',
  },
  output: {
    path: path.resolve('dist'),
    libraryTarget: 'commonjs',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
//   target: 'web',
  externals: /k6(\/.*)?/,
};