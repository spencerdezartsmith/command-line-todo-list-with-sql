const promise = require('bluebird')
const options = { promiseLib: promise }

const config = require('./config')
const pgp = require('pg-promise')(options)
const connectionString = config.selectENV(process.env.NODE_ENV)
const db = pgp(connectionString)
console.log(connectionString) // <-- leftover debug statement?

const getAllTodos = () => { return db.any('SELECT * FROM todos') }

const addNewTodo = (task) => {
  return db.one('INSERT INTO todos(task) VALUES($1) RETURNING id', [task])
}

const removeTodo = (id) => {
  return db.one('DELETE FROM todos WHERE id = $1 RETURNING task', [id])
}

const updateTodo = (id, newTask) => {
  return db.one('UPDATE todos SET task = $1 WHERE id = $2 RETURNING task', [newTask, id])
}

module.exports = {
  getAllTodos,
  addNewTodo,
  removeTodo,
  updateTodo
}
