const et = require('element-theme')

et.run({
  config: './src/styles/classics-element-variables.scss',
  out: './src/assets/theme/classics',
  minimize: true,
})

// et.run({
//   config: './src/styles/green-element-variables.scss',
//   out: './src/assets/theme/green',
//   minimize: true,
// })
