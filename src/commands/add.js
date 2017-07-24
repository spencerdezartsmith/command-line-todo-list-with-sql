const { addNewTodo } = require('../db/queries')

module.exports = (task) => {
  return addNewTodo(task)
    .then(result => {
      console.log(`Created task ${result.id}: ${task}`)
      // this process.exit statement is not needed, the
      // app will quit on it's own
      process.exit(0)
    })
    .catch(err => console.error(err.message))
}
