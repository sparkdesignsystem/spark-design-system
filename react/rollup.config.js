const path = require('path');
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from "rollup-plugin-commonjs";
// import replace from 'rollup-plugin-replace';

export default {
  input: './spark-exports-react.js',
  output: {
    file: './dist/index.js',
    format: 'es',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },

  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: './node_modules'
      }
    }),
    commonjs({
      exclude: '../../**/**/react/**/*.js'
    }),
    babel({
      exclude: path.resolve(__dirname, './node_modules')
    })
  ],
  external: ['react', 'react-dom'],
}
