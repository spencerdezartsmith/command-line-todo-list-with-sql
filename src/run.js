const list = require('./commands/list')
const add = require('./commands/add')
const update = require('./commands/update')
const done = require('./commands/done')
const { printUsage } = require('./helpers/index')

const command = process.argv[2]
const regularArgs = process.argv.slice(3).join(' ')
const updateID = process.argv[3]
const updateArgs = process.argv.slice(4).join(' ')

switch(command) {
  case 'list':
    list(console)
    break
  case 'add':
    add(regularArgs)
    break
  case 'done':
    done(regularArgs)
    break
  case 'update':
    update(updateID, updateArgs)
    break
  default:
    printUsage()
    break
}
