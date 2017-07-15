const { getAllTodos} = require('../db/queries')
const { printList } = require('../helpers')

module.exports = () => {
  return getAllTodos()
    .then(results => printList(results))
    .catch(err => console.error(err.message))
}
