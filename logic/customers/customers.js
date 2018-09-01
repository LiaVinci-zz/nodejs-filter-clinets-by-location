// App Requires
const file = require('../../data/file')
const customerValidator = require('../validators/customer')
const utils = require('../../utils')

exports.getAll = (filePath) => {
  return new Promise((resolve, reject) => {
    file.read(filePath)
      .then((customers) => {
        if (!customers || !customers.length) throw new Error("No Customers Found...")

        customers = customers.map((customer) => customerValidator.validate(JSON.parse(customer)))

        resolve(customers)
      })
      .catch((err) => {
        throw new Error(err)
      })
  })
}

exports.filterByDistanceFrom = (customers, fromLng, fromLat, distance) => {
  if (isNaN(fromLng) || isNaN(fromLat)) {
    throw new Error(`Invalid input longitude and latitude must be numbers input: (fromLng: ${fromLng}, fromLat: ${fromLat})`)
  }

  if (!distance || !(distance > 0)) {
    throw new Error(`Invalid distance value: ${distance}, distance must be a number and be bigger than 0.`)
  }

  if (!customers || !customers.length) {
    console.log('No customers to filter by distance...')

    return customers
  }

  return customers.filter((customer) => utils.calculateDistanceFromTo(fromLat, fromLng, customer.latitude, customer.longitude) <= distance)
}

exports.sortById = (customers) => {
  if (!customers || !customers.length) {
    console.log('No customers to sort...')

    return customers
  }

  return customers.sort((customerA, customerB) => customerA.user_id - customerB.user_id)
}
