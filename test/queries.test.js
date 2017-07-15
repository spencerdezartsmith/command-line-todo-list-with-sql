const { expect } = require('chai')
const db = require('../src/db/queries')

describe('Database Queries', () => {
  describe('getAllTodos', () => {
    it('should return all the todos', () => {
      return db.getAllTodos()
        .then(results => {
          expect(results).to.be.an('array')
          expect(results).to.have.length(1)
          expect(results[0].task).to.deep.eql('Buy milk')
        })
    })
  })

  describe('addNewTodo', () => {
    it('should add a new todo', () => {
      return db.addNewTodo('Buy Bread')
        .then(result => {
          expect(result.id).to.be.an('number')
          expect(result.id).to.eql(2)
        })
    })
  })

  describe('removeTodo', () => {
    it('should remove a todo', () => {
      return db.removeTodo(2)
        .then(result => {
          expect(result).to.have.key('task')
          expect(result).to.be.an('object')
          expect(result).to.deep.eql({ task: 'Buy Bread' })
        })
    })
  })

  describe('updateTodo', () => {
    it('should update a todo', () => {
      return db.updateTodo(1, 'Buy Wine')
        .then(result => {
          expect(result).to.have.key('task')
          expect(result).to.deep.eql({ task: 'Buy Wine' })
        })
    })
  })
})
