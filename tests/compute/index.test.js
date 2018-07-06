import path from 'path'
import Compute from '../../lib/compute'

describe('compute', () => {

  it('Compute constructor should work', () => {
    expect(new Compute({ keyFilePath: path.resolve(__dirname, '..', '.assets', 'dummy-key.json') })).toBeInstanceOf(Compute)
  })

})
