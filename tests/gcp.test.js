import path from 'path'
import Gcp, {AppEngine, Compute, Container, Storage } from '../lib'

describe('gcp', () => {

  let gcp = null

  it('Gcp constructor should work', () => {
    gcp = new Gcp(path.resolve(__dirname, '.assets', 'dummy-key.json'))
    expect(gcp).toBeInstanceOf(Gcp)
  })

  it('imported AppEngine constructor should work', () => {
    expect(new AppEngine(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(AppEngine)
  })

  it('Gcp encapsulated appEngine should be of type AppEngine', () => {
    expect(gcp.appEngine()).toBeInstanceOf(AppEngine)
  })

  it('imported Compute constructor should work', () => {
    expect(new Compute(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(Compute)
  })

  it('Gcp encapsulated compute should be of type Compute', () => {
    expect(gcp.compute()).toBeInstanceOf(Compute)
  })

  it('imported Container constructor should work', () => {
    expect(new Container(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(Container)
  })

  it('Gcp encapsulated container should be of type Container', () => {
    expect(gcp.container()).toBeInstanceOf(Container)
  })

  it('imported Storage constructor should work', () => {
    expect(new Storage(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(Storage)
  })

  it('Gcp encapsulated storage should be of type Storage', () => {
    expect(gcp.storage()).toBeInstanceOf(Storage)
  })

})
