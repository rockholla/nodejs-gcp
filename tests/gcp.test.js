import path from 'path'
import Gcp from '../lib'
import App from '../lib/app'
import Compute from '../lib/compute'
import Kubernetes from '../lib/kubernetes'
import Storage from '../lib/storage'

describe('gcp', () => {

  let gcp = null

  it('Gcp constructor should work', () => {
    gcp = new Gcp(path.resolve(__dirname, '.assets', 'dummy-key.json'))
    expect(gcp).toBeInstanceOf(Gcp)
  })

  it('Gcp-encapsulated app() should be of type App', () => {
    expect(gcp.app()).toBeInstanceOf(App)
  })

  it('Gcp-encapsulated compute() should be of type Compute', () => {
    expect(gcp.compute()).toBeInstanceOf(Compute)
  })

  it('Gcp-encapsulated kubernetes() should be of type Kubernetes', () => {
    expect(gcp.kubernetes()).toBeInstanceOf(Kubernetes)
  })

  it('Gcp-encapsulated storage() should be of type Storage', () => {
    expect(gcp.storage()).toBeInstanceOf(Storage)
  })

})
