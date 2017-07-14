const { list, add, done, update } = require('./commands')

const command = process.argv[2]
const regularArgs = process.argv.slice(3).join(' ')
const updateID = process.argv[3]
const updateArgs = process.argv.slice(4).join(' ')

switch(command) {
  case 'list':
    list(console)
    break
  case 'add':
    add(args)
    break
  case 'done':
    done(args)
    break
  case 'update':
    update(updateID, updateArgs)
    break
  default:
    printUsage()
    process.exit(1)
    break
}
