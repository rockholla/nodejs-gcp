import path from 'path'
import Library from '../lib/library'

describe('library', () => {

  it('constructor should not work without a key file path', () => {
    expect(() => {
      new Library()
    }).toThrow(/.*No service account key file.*/)
  })

  it('constructor should not work with an invalid key file path', () => {
    expect(() => {
      new Library(null, { keyFilePath: path.resolve(__dirname, 'nothing', 'to', 'see', 'here') })
    }).toThrow(/.*doesn't exist.*/)
  })

  it('constructor should not work with an invalid key file', () => {
    expect(() => {
      new Library(null, { keyFilePath: path.resolve(__dirname, 'library.test.js') })
    }).toThrow(/.*not a valid key file.*/)
  })

  it('constructor should work with a valid key file path and package, service property w/in should be populated', () => {
    const library = new Library('@google-cloud/storage', { keyFilePath: path.resolve(__dirname, '.assets', 'dummy-key.json') })
    expect(library).toBeInstanceOf(Library)
    expect(typeof library.Service).toBe('function')
  })

  it('constructor should still work with a blank/null package name, but service w/in should be null', () => {
    const library = new Library(null, { keyFilePath: path.resolve(__dirname, '.assets', 'dummy-key.json') })
    expect(library).toBeInstanceOf(Library)
    expect(library.Service).toBe(null)
  })

  it('constructor should still work with an invalid package name, but service w/in should be null', () => {
    const library = new Library('@google-cloud/no-such-library', { keyFilePath: path.resolve(__dirname, '.assets', 'dummy-key.json') })
    expect(library).toBeInstanceOf(Library)
    expect(library.Service).toBe(null)
  })

})
