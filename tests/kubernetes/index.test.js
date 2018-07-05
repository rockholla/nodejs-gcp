import path from 'path'
import Kubernetes from '../../lib/kubernetes'

describe('kubernetes', () => {

  it('Kubernetes constructor should work', () => {
    expect(new Kubernetes(path.resolve(__dirname, '..', '.assets', 'dummy-key.json'))).toBeInstanceOf(Kubernetes)
  })

})
