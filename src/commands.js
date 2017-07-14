const { getAllTodos, addNewTodo, removeTodo } = require('./db/queries')
const { print } = require('./helpers/print')

const list = () => {
  getAllTodos()
    .then(console.log)
}

const add = (task) => {
  addNewTodo(task)
    .then(result => console.log(`Created task ${result.id}`))
}

const done = (id) => {
  removeTodo(id)
    .then(console.log)
}

module.exports = {
  list,
  add,
  done
}
