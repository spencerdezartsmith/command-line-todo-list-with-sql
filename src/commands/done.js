const { removeTodo } = require('../db/queries')

module.exports = (id) => {
  return removeTodo(id)
    .then(result => {
      console.log(`Completed the task ${result.task}`)
      // this process.exit statement is not needed, the
      // app will quit on it's own
      process.exit(0)
    })
    .catch(err => console.error(err.message))
}
