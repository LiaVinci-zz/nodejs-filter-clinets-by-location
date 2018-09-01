// External Requires
const chai = require('chai')
const expect = chai.expect

// App Requires
const distance = require('./distance')

describe('Utils Distance Tests', () => {
  describe('distance.calculateDistanceFromTo()', () => {
    it('should be a function', () => {
      expect(distance.calculateDistanceFromTo).to.be.a('function')
    })

    it('should return distance between two points', () => {
      let distanceBetweenTwoPoints = distance.calculateDistanceFromTo(87.123, 88.111, 70.643, 101.321)

      expect(distanceBetweenTwoPoints).to.not.be.null
      expect(distanceBetweenTwoPoints).to.be.above(1831)
    })

    it('should throw an error when coordinates are undefined', () => {
      expect(() => { distance.calculateDistanceFromTo() }).to.throw()
      expect(() => { distance.calculateDistanceFromTo(null, null, null, null) }).to.throw()
    })

    it('should throw an error when coordinate are out of range', () => {
      expect(() => { distance.calculateDistanceFromTo(300, 400, 500, 600) }).to.throw()
    })
  })
})
