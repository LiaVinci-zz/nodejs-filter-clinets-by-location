// External Requires
const chai = require('chai')
const expect = chai.expect

// App Requires
const converters = require('./converters')

describe('Utils Converters Tests', () => {
  describe('converters.convertDegreeToRadians()', () => {
    it('should be a function', () => {
      expect(converters.convertDegreeToRadians).to.be.a('function')
    })

    it('should return a radians', () => {
      let radians = converters.convertDegreeToRadians(87.123)

      expect(radians).to.not.be.null
      expect(radians).to.be.above(1)
    })

    it('should throw an error if degree is not a number', () => {
      expect(() => { converters.convertDegreeToRadians('a degree') }).to.throw()
      expect(() => { converters.convertDegreeToRadians(null) }).to.throw()
    })
  })

  describe('converters.convertRadiansToDegree()', () => {
    it('should be a function', () => {
      expect(converters.convertRadiansToDegree).to.be.a('function')
    })

    it('should return a degree', () => {
      let degree = converters.convertRadiansToDegree(1.52)

      expect(degree).to.not.be.null
      expect(degree).to.be.above(87)
    })

    it('should throw an error if degree is not a number', () => {
      expect(() => { converters.convertRadiansToDegree('a radians') }).to.throw()
      expect(() => { converters.convertRadiansToDegree(null) }).to.throw()
    })
  })
})
