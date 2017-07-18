const { expect } = require('chai')
const db = require('../src/db/queries')

describe('Database Queries', () => {
  // Instead of importing a "seed" file with your todo for the tests, consider
  // just inserting the row you want to insert inside a beforeEach block. That
  // will a more flexible and maintanable solution. Imagine a larger app where
  // you have 100 different test files and each test needs to have a certain
  // kind of data present to test against.
  //
  // You can also truncate prexisting data in the before-each block so each test
  // runs on a fresh copy of the data without anything added by previous tests.
  // That's a very common pattern. Then you would not have to drop and recreate
  // the db in your test script in you package.json. You could have a separate
  // command that created the test database with the right schema
  // (db:setup:test maybe?) and a developer would only have to run that once,
  // then the test can manage adding and removing data on their own.

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
// These are great tests for your todo methods. You might want to also add unit
// tests for the helper and command functions as well.
