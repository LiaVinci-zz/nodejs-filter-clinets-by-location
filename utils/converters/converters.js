exports.convertDegreeToRadians = (degree) => {
  if (degree === null || isNaN(degree)) {
    throw new Error(`Degree must be a number in order to convert it to radians.`)
  }

  return degree * (Math.PI / 180)
}

exports.convertRadiansToDegree = (radians) => {
  if (radians === null || isNaN(radians)) {
    throw new Error(`Radians must be a number in order to convert it to degree.`)
  }

  return radians * (180 / Math.PI)
}
