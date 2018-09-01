// App Requires
const distance = require('./distance/distance')
const converters = require('./converters/converters')

module.exports = {
  calculateDistanceFromTo: distance.calculateDistanceFromTo,
  convertDegreeToRadians: converters.convertDegreeToRadians,
  convertRadiansToDegree: converters.convertRadiansToDegree
}
