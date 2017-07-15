const { addNewTodo } = require('../db/queries')

module.exports = (task) => {
  return addNewTodo(task)
    .then(result => {
      console.log(`Created task ${result.id}: ${task}`)
      process.exit(0)
    })
    .catch(err => console.error(err.message))
}
