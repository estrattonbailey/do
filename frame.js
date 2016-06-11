#!/usr/bin/env node

'use strict'

const fs = require('fs-extra')

const path = process.argv[2] || '.'

const FROM = `${ __dirname }/lib`
const TO   = `${ process.cwd() }/${ path }`

fs.copy(FROM, TO, (error) => {
  if(error) return console.log(error)

  fs.renameSync(TO + '/gitignore', TO + '/.gitignore')
})

fs.copy(`${__dirname}/README.md`, TO, (error) => {
  if(error) return console.log('ERROR',error)
})
