// App Requires
const customers = require('./customers')

module.exports = {
  getAll: customers.getAll,
  filterByDistanceFrom: customers.filterByDistanceFrom,
  sortById: customers.sortById
}
