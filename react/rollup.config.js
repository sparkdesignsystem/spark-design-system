import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const path = require('path');

export default {
  external: ['react', 'react-dom'],
  input: './src/spark-exports-react.js',
  output: {
    file: './dist/index.js',
    format: 'commonjs',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },

  plugins: [
    resolve(),
    commonjs({
      exclude: path.resolve(__dirname, 'src/**/*.js'),
    }),
    babel({
      exclude: path.resolve(__dirname, './node_modules'),
    }),
    terser(),
  ],
};
