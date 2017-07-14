const printList = (stream, items) => {
  stream.log('ID Description')
  stream.log('-- -----------')
  items.forEach(item => {
    stream.log(`${item.id}  ${item.task}`)
  })

  stream.log(`\n${items.length} tasks`)
}

const printUsage = () => {
  console.log(`
    Sorry: command '${command}' not recognized :( \n
    Accepted commands are:
    list
    add <task>
    update <task id> <updated task>
    delete <task id>

    Note: Please use the list command to get a reference to the task id's
  `)
}

module.exports = { printList, printUsage }
