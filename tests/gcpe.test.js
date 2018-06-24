import path from 'path'
import Gcpe, {AppEngine, Compute, Container, Storage } from '../lib'

describe('gcpe', () => {

  let gcpe = null

  it('Gcpe constructor should work', () => {
    gcpe = new Gcpe(path.resolve(__dirname, '.assets', 'dummy-key.json'))
    expect(gcpe).toBeInstanceOf(Gcpe)
  })

  it('imported AppEngine constructor should work', () => {
    expect(new AppEngine(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(AppEngine)
  })

  it('Gcpe encapsulated appEngine should be of type AppEngine', () => {
    expect(gcpe.appEngine()).toBeInstanceOf(AppEngine)
  })

  it('imported Compute constructor should work', () => {
    expect(new Compute(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(Compute)
  })

  it('Gcpe encapsulated compute should be of type Compute', () => {
    expect(gcpe.compute()).toBeInstanceOf(Compute)
  })

  it('imported Container constructor should work', () => {
    expect(new Container(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(Container)
  })

  it('Gcpe encapsulated container should be of type Container', () => {
    expect(gcpe.container()).toBeInstanceOf(Container)
  })

  it('imported Storage constructor should work', () => {
    expect(new Storage(path.resolve(__dirname, '.assets', 'dummy-key.json'))).toBeInstanceOf(Storage)
  })

  it('Gcpe encapsulated storage should be of type Storage', () => {
    expect(gcpe.storage()).toBeInstanceOf(Storage)
  })

})
