const promise = require('bluebird')
const options = { promiseLib: promise }

const config = require('./config')
const pgp = require('pg-promise')(options)
const connectionString = config.selectENV(process.env.NODE_ENV)
const db = pgp(connectionString)

const getAllTodos = () => { return db.any('SELECT * FROM todos') }

const addNewTodo = (task) => {
  return db.one('INSERT INTO todos(task) VALUES($1) RETURNING id', [task])
}

const removeTodo = (id) => {
  return db.one('DELETE FROM todos WHERE id = $1 RETURNING task', [id])
}

module.exports = {
  getAllTodos,
  addNewTodo,
  removeTodo
}
