import path from 'path'
import Gcp, { App, Compute, Kubernetes, Storage } from '../lib'

describe('gcp', () => {

  let gcp = null

  it('Gcp constructor should work', () => {
    gcp = new Gcp(path.resolve(__dirname, '.assets', 'dummy-key.json'))
    expect(gcp).toBeInstanceOf(Gcp)
  })

  it('imported App constructor should work', () => {
    expect(new App(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(App)
  })

  it('Gcp encapsulated app should be of type App', () => {
    expect(gcp.app()).toBeInstanceOf(App)
  })

  it('imported Compute constructor should work', () => {
    expect(new Compute(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(Compute)
  })

  it('Gcp encapsulated compute should be of type Compute', () => {
    expect(gcp.compute()).toBeInstanceOf(Compute)
  })

  it('imported Kubernetes constructor should work', () => {
    expect(new Kubernetes(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(Kubernetes)
  })

  it('Gcp encapsulated kubernetes should be of type Kubernetes', () => {
    expect(gcp.kubernetes()).toBeInstanceOf(Kubernetes)
  })

  it('imported Storage constructor should work', () => {
    expect(new Storage(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(Storage)
  })

  it('Gcp encapsulated storage should be of type Storage', () => {
    expect(gcp.storage()).toBeInstanceOf(Storage)
  })

})
