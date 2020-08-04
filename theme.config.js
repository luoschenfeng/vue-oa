const et = require('element-theme')

et.run({
  config: './src/styles/default-element-variables.scss',
  out: './src/assets/theme/default',
  minimize: true,
})
et.run({
  config: './src/styles/green-element-variables.scss',
  out: './src/assets/theme/green',
  minimize: true,
})
