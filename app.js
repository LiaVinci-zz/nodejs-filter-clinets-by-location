// App Requires
const config = require('./config')
const customers = require('./logic/customers')

customers.getAll(config.customersFilePath)
  .then((data) => {
    const longitude = config.offices.dublin.longitude
    const latitude = config.offices.dublin.latitude
    let customersWithinDistanceSortedById = customers.sortById(customers.filterByDistanceFrom(data, longitude, latitude, 100))

    console.log('Those are the near by customers that you should invite for a dinner: ')

    customersWithinDistanceSortedById.forEach((customer) => console.log(`id. ${customer.user_id} name. ${customer.name}`))
  })
  .catch((error) => console.error(error))
