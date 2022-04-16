/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-default-export */
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

export default {
  input: ['./src/index.ts'],
  output: [
    {
      dir: 'dist',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
    },
  ],
  plugins: [
    external(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.bundle.json' }),
    url({
      include: ['**/*.ttf', '**/*.svg'],
      limit: Infinity,
    }),
    svgr({ icon: true }),
    postcss(),
    terser(),
  ],
};
