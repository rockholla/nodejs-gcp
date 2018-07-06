import path from 'path'
import Storage from '../../lib/storage'

describe('storage', () => {

  it('Storage constructor should work', () => {
    expect(new Storage({ keyFilePath: path.resolve(__dirname, '..', '.assets', 'dummy-key.json') })).toBeInstanceOf(Storage)
  })

})
