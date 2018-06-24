import AppEngine from './app-engine'
import Compute from './compute'
import Container from './container'
import Storage from './storage'

class Gcpe {

  constructor (keyFilePath) {
    this.keyFilePath = keyFilePath
  }

  appEngine () {
    return new AppEngine(this.keyFilePath)
  }

  compute () {
    return new Compute(this.keyFilePath)
  }

  container () {
    return new Container(this.keyFilePath)
  }

  storage () {
    return new Storage(this.keyFilePath)
  }

}

export {
  Gcpe as default,
  AppEngine,
  Compute,
  Container,
  Storage,
}
