import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
import babel from '@rollup/plugin-babel';
import typescript from "typescript"
import rollupTypescript from "rollup-plugin-typescript2"
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import rollupPluginUmdDts from './extends/rollup-plugin-umd-dts.mjs'
const toolName = 'FileViewer'

function zeroTo2 (data) {
  if(data < 10) {
    return '0' + data
  } else {
    return String(data)
  }
}

function simpleFromatTime (date) {
  var year = zeroTo2(date.getFullYear());
  var month = zeroTo2(date.getMonth() + 1);
  var day = zeroTo2(date.getDate());
  var hour = zeroTo2(date.getHours());
  var minute = zeroTo2(date.getMinutes());
  var second = zeroTo2(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}


function getBanner () {
  return `/**
 * 图片、pdf预览插件 => ${toolName}
 * @author bestime
 * @update ${simpleFromatTime(new Date())}
 */`
}



function getDtsName (type) {
  return `dist/${type}/index.d.ts`
}


export default [
  {
    input: './src/main.ts',
    external: [
      '@bestime/utils_base',
      '@bestime/utils_browser',
    ],
    output: {
      file: `dist/index.min.mjs`,
      banner: getBanner(),
      format: 'esm',
      strict: true,
      indent: false,
      sourcemap: false,      
    },
    
    plugins: [
      nodeResolve(),
      
      rollupTypescript({
        include: "src/**/*.ts",
        exclude: "node_modules/**",
        typescript: typescript,
        useTsconfigDeclarationDir: true,
        allowNonTsExtensions: false,
      }),

      json(),
      commonjs(),
  
      babel({
        babelHelpers: 'bundled',
        exclude: "node_modules/**",
        extensions: [
          '.ts',
          '.js'
        ]
      }),
  
      postcss({
        extract: 'static/index.min.css'
      }),
      
      terser({
        format: {
          beautify: false
        }
      })
    ]
  },
  {
    input: './src/main.ts',
    output: [
      { file: `dist/index.min.d.ts`, format: "es" }
    ],
    plugins: [
      dts(),
      postcss({
        extract: 'static/index.min.css',
        plugins: [
          cssnano()
        ]
      }), 
    ],
  },
  
  
];