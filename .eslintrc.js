module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [

    // 'plugin:vue/base',
    // 'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/recommended',

    // 'plugin:vue/no-layout-rules',
    // 'plugin:vue/strongly-recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',

    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',

    'vue/component-tags-order': [
      'error',
      {
        order: [
          'template',
          'script',
          'style',
        ],
      },
    ],

    'vue/html-self-closing': [
      'error',
      {
        'html': {
          normal: 'never',
          void: 'any',
        },
      },
    ],

    // 单引号(js中使用单引号)
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true,
      },
    ],

    // 换行(两个空格)
    'indent': [
      'error',
      2,
      {
        'ignoredNodes': [ 'TemplateLiteral' ],
      },
    ],

    // 添加大括号(if语句等代码块添加大括号)
    'curly': 'error',

    // 函数括号前加空格(具名类型的函数不加空格)
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // 设置 int32Hint 选项为 true (默认 false) 允许 a|0 不带空格  (关键字前后加空格)
    'space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],

    //  对象的.符号位置(操作和点在同一行)
    'dot-location': [
      'error',
      'property',
    ],

    // 对象花括号后的换行(multiline表示属性内有换行，则花括号独占一行，)
    'object-curly-newline': [
      'error',
      {
        'multiline': true,
        'minProperties': 1,
      },
    ],

    // 对象加空格
    'object-curly-spacing': [
      'error',
      'always',
    ],

    // 对象多个属性在不同行，
    'object-property-newline': [
      'error',
      {
        'allowAllPropertiesOnSameLine': false,
      },
    ],

    // "object-property-newline": [ "error", {"allowAllPropertiesOnSameLine": true, }, ],

    // object，array多行时最后一个属性加逗号，有利于git的diff
    'comma-dangle': [
      'error',
      'always-multiline',
    ],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': [
      'error',
      'always',
    ],

    // 'brace-style': ['error', '1tbs'], // 强制在代码块中使用一致的大括号风格 if...else

    // 逗号前后的空格,
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // :前后的空格,
    'key-spacing': [
      'error',
      {
        beforeColon: false,
      },
    ],

    // 行注释位置,
    'line-comment-position': [
      'error',
      {
        position: 'above',
      },
    ],

    // 行注释前后空行,
    'lines-around-comment': [
      'error',
      {
        beforeLineComment: true,
      },
    ],

    // 'spaced-comment': ['error', 'always'], // 行注释换行

    // 三元操作符换行
    'multiline-ternary': [
      'error',
      'always-multiline',
    ],

    // 申明语句换行
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: '*',
      },
    ],

    // function {} 前面的空格
    'space-before-blocks': [
      'error',
      'always',
    ],

    // 圆括号内无空格
    'space-in-parens': [
      'error',
      'never',
    ],

    // 数组前后空格
    'array-bracket-spacing': [
      'error',
      'always',
    ],

    // 数组中括号后的换行
    'array-bracket-newline': [
      'error',
      {
        'multiline': true,
      },
    ],

    // 数组元素换行
    'array-element-newline': [
      'error',
      {
        'multiline': true,
        'minItems': 2,
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
