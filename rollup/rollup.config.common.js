import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';
import typescript from '@rollup/plugin-typescript';

export const plugins = [
  resolve({
    browser: true,
    preferBuiltins: false,
    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
  }),
  commonjs({
    include: /node_modules/,
  }),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  visualizer(),
];

export default {
  input: './src/index.ts',
  external: ['react', 'react-dom', 'styled-components'],
};
