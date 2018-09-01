// External Requires
const chai = require('chai')
const expect = chai.expect
const assert = require('assert')
const sinon = require('sinon')

// App Requires
const customers = require('./customers')

describe('Logic Customers Tests', () => {
  describe('customers.getAll()', () => {
    let filePath = 'mocks/file/original.json'

    it('should be a function', () => {
      expect(customers.getAll).to.be.a('function')
    })

    it('should return an array of json', () => {
      customers.getAll(filePath)
          .then((customers) => {
            expect(customers).to.not.be.null
            expect(customers).to.have.lengthOf(32)

            expect(customers[0]).to.not.be.null
            expect(customers[0]).to.be.an('object')
          })
    })

    it('should catch an error if customer does not exist', () => {
      let mock = [null]

      customers.getAll(filePath)
        .catch((err) => {
          expect(err).to.not.be.null
        })
    })

    it('should catch an error if one or more of the customer props missing', () => {
      let mock = [{ latitude: null, user_id: null, name: null, longitude: null }]

      customers.getAll(filePath)
        .catch((err) => {
          expect(err).to.not.be.null
        })
    })
  })

  describe('customers.filterByDistanceFrom()', () => {
    let spyConsole;

    beforeEach(() => {
      spyConsole = sinon.spy(console, 'log')
    })

    afterEach(() => {
      spyConsole.restore()
    })

    it('should be a function', () => {
      expect(customers.filterByDistanceFrom).to.be.a('function')
    })

    it('should return customers within the given distance', () => {
      let mock = [
        { latitude: 52.986375, user_id: 12, name: "Christina McArdle", longitude: -6.043701 },
        { latitude: 51.92893, user_id: 1, name: "Alice Cahill", longitude: -10.27699 },
        { latitude: 51.8856167, user_id: 2, name: "Ian McArdle", longitude: -10.4240951 },
        { latitude: 52.3191841, user_id: 3, name: "Jack Enright", longitude: -8.5072391 }
      ]

      let filteredCustomers = customers.filterByDistanceFrom(mock, -6.257664, 53.339428, 100)

      expect(filteredCustomers).to.not.be.null
      expect(filteredCustomers).to.have.lengthOf(1)
      expect(filteredCustomers).to.have.deep.members([{ latitude: 52.986375, user_id: 12, name: "Christina McArdle", longitude: -6.043701 }])
    })

    it('should throw an error if fromLng / fromLat is not a number', () => {
      expect(() => { customers.filterByDistanceFrom([], 'hello', 'world', 100) }).to.throw()
    })

    it('should throw an error if distance in not a number', () => {
      expect(() => { customers.filterByDistanceFrom([], 1.111, 2.222, 'Hello World') }).to.throw()
    })

    it('should throw an error if distance in a negative number', () => {
      expect(() => { customers.filterByDistanceFrom([], 1.111, 2.222, -123) }).to.throw()
    })

    it('should output console message if the given array is empty', () => {
      let filterEmpty = customers.filterByDistanceFrom([], 1.123, 2.323, 100)

      expect(filterEmpty).to.not.be.null
      expect(filterEmpty).to.be.an('array').that.is.empty
      assert(spyConsole.calledWith('No customers to filter by distance...'))
    })

    it('should output console message if the given array does not exist', () => {
      let filterNull = customers.filterByDistanceFrom(null, 1.123, 2.323, 100)

      expect(filterNull).to.be.null
      assert(spyConsole.calledWith('No customers to filter by distance...'))
    })
  })

  describe('customers.sortById()', () => {
    let spyConsole;

    beforeEach(() => {
      spyConsole = sinon.spy(console, 'log')
    })

    afterEach(() => {
      spyConsole.restore()
    })

    it('should be a function', () => {
      expect(customers.sortById).to.be.a('function')
    })

    it('should sort array with objects by user_id', () => {
      let mock = [{ user_id: 3 }, { user_id: 1 }, { user_id: 2 }]
      let sortedArrayByUserId = customers.sortById(mock)

      expect(sortedArrayByUserId).to.not.be.null
      expect(sortedArrayByUserId).to.have.lengthOf(3)
      expect(sortedArrayByUserId).to.include.deep.ordered.members([{ user_id: 1 }, { user_id: 2 }, { user_id: 3 }])
    })

    it('should output console message if the given array is empty', () => {
      let sortEmpty = customers.sortById([])

      expect(sortEmpty).to.not.be.null
      expect(sortEmpty).to.be.an('array').that.is.empty
      assert(spyConsole.calledWith('No customers to sort...'))
    })

    it('should output console message if the given array does not exist', () => {
      let sortNull = customers.sortById(null)

      expect(sortNull).to.be.null
      assert(spyConsole.calledWith('No customers to sort...'))
    })
  })
})
