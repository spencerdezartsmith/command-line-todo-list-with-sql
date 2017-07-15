const { updateTodo } = require('../db/queries')

module.exports = (id, newTask) => {
  return updateTodo(id, newTask)
    .then(result => {
      console.log(`You successfully updated task ${id} to be ${result.task}`)
      process.exit(0)
    })
    .catch(err => console.error(err.message))
}
