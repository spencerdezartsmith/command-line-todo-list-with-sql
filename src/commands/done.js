const { removeTodo } = require('../db/queries')

module.exports = (id) => {
  return removeTodo(id)
    .then(result => {
      console.log(`Completed the task ${result.task}`)
      process.exit(0)
    })
    .catch(err => console.error(err.message))
}
