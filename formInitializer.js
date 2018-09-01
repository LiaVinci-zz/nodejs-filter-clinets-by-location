// External Requires
const inquirer = require('inquirer')
const argv = require('minimist')(process.argv.slice(4));

// App Requires
const config = require('./config')

const form = [
  {
    name: 'filePath',
    type: 'input',
    default: argv._[0] || config.customersFilePath,
    message: `Enter the file path which contains your customers:`,
    validate: (filePath) => {
      if (typeof filePath !== 'string' || !(filePath && filePath.trim().length)) {
        return 'Please enter a valid string for the file path'
      }

      return true
    }
  },
  {
    name: 'longitude',
    type: 'input',
    default: argv._[1] || config.offices.dublin.longitude,
    message: `Enter your longitude:`,
    validate: (longitude) => {
      if (isNaN(longitude) || longitude < -180 || 180 < longitude)
        return `Longitude must be a number and have a value between -180 and 180`

      return true
    }
  },
  {
    name: 'latitude',
    type: 'input',
    default: argv._[2] || config.offices.dublin.latitude,
    message: `Enter your latitude:`,
    validate: (latitude) => {
      if (isNaN(latitude) || latitude < -90 || 90 < latitude)
        return `Latitude must be a number and have a value between -90 and 90`

      return true
    }
  },
  {
    name: 'distance',
    type: 'input',
    default: argv._[3] || 100,
    message: `Please enter the maximum distance to filter your customers:`,
    validate: (distance) => {
      if (!distance || !(distance > 0))
        return `Distance must be a number and be bigger than 0.`

      return true
    }
  }
]

module.exports = () => {
  return inquirer.prompt(form);
}
