// External Requires
const chai = require('chai')
const expect = chai.expect

// App Requires
const file = require('./file')

describe('Data File Tests', () => {
  describe('file.read()', () => {
    it('should be a function', () => {
      expect(file.read).to.be.a('function')
    })

    it('should return an empty array', () => {
      let filePath = 'mocks/file/empty.json'

      file.read(filePath)
          .then((lines) => {
            expect(lines).to.not.be.null
            expect(lines).to.be.an('array').that.is.empty
          })
    })

    it('should return an array with string results', () => {
      let filePath = 'mocks/file/original.json'

      file.read(filePath)
          .then((lines) => {
            expect(lines).to.not.be.null
            expect(lines[0]).to.not.be.null
            expect(lines[0]).to.be.an('string')
            expect(lines).to.have.lengthOf(32)
          })
    })

    it('should return an array and ignore whitespaces', () => {
      let filePath = 'mocks/file/withWhiteSpaces.json'

      file.read(filePath)
          .then((lines) => {
            expect(lines).to.not.be.null
            expect(lines).to.have.lengthOf(1)
          })
    })

    it('should return an array and ignore empty lines', () => {
      let filePath = 'mocks/file/withEmptyLines.json'

      file.read(filePath)
          .then((lines) => {
            expect(lines).to.not.be.null
            expect(lines).to.have.lengthOf(5)
          })
    })

    it('should reject with an error if file not found', () => {
      let filePath = 'missing.json'

      file.read(filePath)
          .catch((err) => {
            expect(err).to.not.be.null
            expect(err).to.equal(`Opps file not found... this is the file path provided: ${filePath}`)
          })
    })
  });
})
