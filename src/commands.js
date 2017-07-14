const { getAllTodos, addNewTodo, removeTodo, updateTodo } = require('./db/queries')
const { printList, printUsage } = require('./helpers/index')

const list = (stream) => {
  getAllTodos()
    .then(tasks => printList(stream, tasks))
}

const add = (task) => {
  addNewTodo(task)
    .then(result => console.log(`Created task ${result.id}`))
    .catch(err => console.error(err.message))
}

const done = (id) => {
  removeTodo(id)
    .then(result => console.log(`Completed the task ${result.task}`))
    .catch(err => console.error(err.message))
}

const update = (id, newTask) => {
  updateTodo(id, newTask)
    .then(result => console.log(`You successfully updated task ${id} to ${result.task}`))
    .catch(err => console.error(err.message))
}

module.exports = {
  list,
  add,
  done,
  update
}
