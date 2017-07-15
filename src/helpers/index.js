const printList = (items) => {
  console.log('ID Description')
  console.log('-- -----------')
  items.forEach(item => {
    console.log(`${item.id}  ${item.task}`)
  })
  console.log(`\n${items.length} tasks`)
  process.exit(0)
}

const printUsage = () => {
  console.log(`
    Sorry: command not recognized :( \n
    Accepted commands are:
    list
    add <task>
    update <task id> <updated task>
    delete <task id>

    Note: Please use the list command to get a reference to the task id's
  `)
}

module.exports = { printList, printUsage }
