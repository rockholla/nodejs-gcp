import App from './app'
import Compute from './compute'
import Kubernetes from './kubernetes'
import Storage from './storage'

class Gcp {

  constructor (keyFilePath) {
    this.keyFilePath = keyFilePath
  }

  app () {
    return new App(this.keyFilePath)
  }

  compute () {
    return new Compute(this.keyFilePath)
  }

  kubernetes () {
    return new Kubernetes(this.keyFilePath)
  }

  storage () {
    return new Storage(this.keyFilePath)
  }

}

export {
  Gcp as default,
  App,
  Compute,
  Kubernetes,
  Storage,
}
