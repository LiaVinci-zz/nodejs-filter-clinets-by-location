// App Requires
const converters = require('../converters/converters')

exports.calculateDistanceFromTo = (fromLat, fromLng, toLat, toLng) => {
  const DEGREE_CIRCLE_EARTH = 110.57

  if (isNaN(fromLat) || fromLat < -90 || 90 < fromLat)
    throw new Error(`Invalid latitude fromLat: ${fromLat} must be a number and have a value between -90 and 90`)

  if (isNaN(fromLng) || fromLng < -180 || 180 < fromLng)
    throw new Error(`Invalid longitude fromLng: ${fromLng} must be a number and have a value between -180 and 180`)

  if (isNaN(toLat) || toLat < -90 || 90 < toLat)
    throw new Error(`Invalid latitude toLat: ${toLat} must be a number and have a value between -90 and 90`)

  if (isNaN(toLng) || toLng < -180 || 180 < toLng)
    throw new Error(`Invalid longitude toLng: ${toLng} must be a number and have a value between -180 and 180`)

  fromLat = converters.convertDegreeToRadians(fromLat)
  fromLng = converters.convertDegreeToRadians(fromLng)
  toLat = converters.convertDegreeToRadians(toLat)
  toLng = converters.convertDegreeToRadians(toLng)

  angel = Math.acos(
    Math.cos(fromLat) * Math.cos(toLat) * Math.cos(toLng - fromLng) +
    Math.sin(fromLat) * Math.sin(toLat)
  )

  distance = DEGREE_CIRCLE_EARTH * converters.convertRadiansToDegree(angel)

  return distance
}
