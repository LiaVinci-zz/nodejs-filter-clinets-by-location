// External Requires
const chai = require('chai')
const expect = chai.expect

// App Requires
const customer = require('./customer')

describe('Logic Validators Customer Tests', () => {
  describe('customer.validate()', () => {
    it('should be a function', () => {
      expect(customer.validate).to.be.a('function')
    })

    it('should catch an error if customer does not exist', () => {
      let mock = null

      expect(() => { customer.validate(mock) }).to.throw("Oh oh customer must exist!")
    })

    it('should catch an error if customer does not have a name', () => {
      let mock = { latitude: 52.986375, user_id: 12, name: null, longitude: -6.043701 }

      expect(() => { customer.validate(mock) }).to.throw(`Customer name is missing :( ${mock}`)
    })

    it('should catch an error if customer can not be identified', () => {
      let mock = { latitude: 52.986375, user_id: null, name: 'Liav Avnaim', longitude: -6.043701 }

      expect(() => { customer.validate(mock) }).to.throw(`Customer identifier is missing... ${mock}`)
    })

    it('should catch an error if customer does not have a location', () => {
      let mock = { latitude: null, user_id: 1, name: 'Liav Avnaim', longitude: null }

      expect(() => { customer.validate(mock) }).to.throw(`Could not find customer location, help me find him ${mock}`)
    })

    it('should catch an error if customer location is not a number', () => {
      let mock = { latitude: 'I am there', user_id: 1, name: 'Liav Avnaim', longitude: 'I am here' }

      expect(() => { customer.validate(mock) }).to.throw(`Could not find customer location, help me find him ${mock}`)
    })
  })
})
