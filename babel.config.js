module.exports = {
  babelrc: false,
  presets: [
    [ '@babel/env', {
      forceAllTransforms: true,
      modules: 'commonjs'
    } ],
    [ '@babel/react' ]
  ],
  plugins:[
    [ '@babel/proposal-class-properties' ],
    [ '@babel/transform-runtime' ],
    [ 'styled-components' ],
  ]
}
