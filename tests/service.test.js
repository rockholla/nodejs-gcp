import path from 'path'
import Service from '../lib/service'

describe('service', () => {

  it('constructor should not work without a key file path', () => {
    expect(() => {
      new Service()
    }).toThrow(/.*No service account key file.*/)
  })

  it('constructor should not work with an invalid key file path', () => {
    expect(() => {
      new Service(null, { keyFilePath: path.resolve(__dirname, 'nothing', 'to', 'see', 'here') })
    }).toThrow(/.*doesn't exist.*/)
  })

  it('constructor should not work with an invalid key file', () => {
    expect(() => {
      new Service(null, { keyFilePath: path.resolve(__dirname, 'service.test.js') })
    }).toThrow(/.*not a valid key file.*/)
  })

  it('constructor should work with a valid key file path and package, service property w/in should be populated', () => {
    const s = new Service('@google-cloud/storage', { keyFilePath: path.resolve(__dirname, '.assets', 'dummy-key.json') })
    expect(s).toBeInstanceOf(Service)
    expect(typeof s.Service).toBe('function')
  })

  it('constructor should still work with a blank/null package name, but service w/in should be null', () => {
    const s = new Service(null, { keyFilePath: path.resolve(__dirname, '.assets', 'dummy-key.json') })
    expect(s).toBeInstanceOf(Service)
    expect(s.Service).toBe(null)
  })

  it('constructor should still work with an invalid package name, but service w/in should be null', () => {
    const s = new Service('@google-cloud/no-such-service', { keyFilePath: path.resolve(__dirname, '.assets', 'dummy-key.json') })
    expect(s).toBeInstanceOf(Service)
    expect(s.Service).toBe(null)
  })

})
