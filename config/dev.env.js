'use strict'
// 开发环境
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://192.168.1.110:8080"',
  RES_PATH: '"http://192.168.1.108/"'
})
