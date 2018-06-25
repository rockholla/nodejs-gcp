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
      new Service(path.resolve(__dirname, 'nothing', 'to', 'see', 'here'))
    }).toThrow(/.*doesn't exist.*/)
  })

  it('constructor should not work with an invalid key file', () => {
    expect(() => {
      new Service(path.resolve(__dirname, 'service.test.js'))
    }).toThrow(/.*not a valid key file.*/)
  })

  it('constructor should work with a valid key file path and package, service property w/in should be populated', () => {
    const service = new Service(path.resolve(__dirname, '.assets', 'dummy-key.json'), '@google-cloud/compute')
    expect(service).toBeInstanceOf(Service)
    expect(typeof service.service).toBe('function')
  })

  it('constructor should still work with a blank package name, but service w/in should be null', () => {
    const service = new Service(path.resolve(__dirname, '.assets', 'dummy-key.json'))
    expect(service).toBeInstanceOf(Service)
    expect(service.service).toBe(null)
  })

  it('constructor should still work with an invalid package name, but service w/in should be null', () => {
    const service = new Service(path.resolve(__dirname, '.assets', 'dummy-key.json'), '@google-cloud/no-such-service')
    expect(service).toBeInstanceOf(Service)
    expect(service.service).toBe(null)
  })

})
