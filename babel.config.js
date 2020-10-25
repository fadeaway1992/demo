const { BUILD_FLAG = '' } = process.env

const isDev = !BUILD_FLAG.includes('production')

module.exports = {
  babelrc: false,
  presets: [
    [ '@babel/env', {
      targets: !isDev ? {} : { node: '8.8' },
      forceAllTransforms: !isDev,
      modules: 'commonjs'
    } ],
    [ '@babel/react' ]
  ],
  plugins:[
    [ '@babel/proposal-class-properties' ],
    [ '@babel/proposal-export-default-from' ],
    [ '@babel/transform-runtime' ],
    [ 'styled-components' ],
  ]
}
