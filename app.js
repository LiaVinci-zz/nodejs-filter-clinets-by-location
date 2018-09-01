// External Requires
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')

// App Requires
const formInitializer = require('./formInitializer')
const customers = require('./logic/customers')

clear()

console.log(
  chalk.cyan(
    figlet.textSync('Intercom', { horizontalLayout: 'full' })
  )
)

initializeApp = async () => {
  let filterCustomerSettings = await formInitializer()

  clear()

  console.log(
    chalk.cyan(
      figlet.textSync('Filtered Customers', { horizontalLayout: 'full' })
    )
  )

  customers.getAll(filterCustomerSettings.filePath)
    .then((data) => {
      const longitude = filterCustomerSettings.longitude
      const latitude = filterCustomerSettings.latitude
      const distance = filterCustomerSettings.distance

      let customersWithinDistanceSortedById = customers.sortById(customers.filterByDistanceFrom(data, longitude, latitude, distance))

      console.log(chalk.yellow('Those are the near by customers that you should invite for a dinner: \n'))

      customersWithinDistanceSortedById.forEach((customer) => console.log(`id. ${customer.user_id} name. ${customer.name}`))
    })
    .catch((error) => console.error(error))
}

initializeApp()
