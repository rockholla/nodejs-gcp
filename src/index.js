import App from './app'
import Compute from './compute'
import Kubernetes from './kubernetes'
import Storage from './storage'
import Logger from './logger'
import { DEFAULT_WAIT_TIMEOUT } from './constants'

class Gcp {

  constructor (keyFilePath, waitTimeout = DEFAULT_WAIT_TIMEOUT, logger = null) {
    this.logger       = new Logger(logger)
    this.keyFilePath  = keyFilePath
    this.waitTimeout  = waitTimeout
  }

  setWaitTimeout (timeout) {
    this.waitTimeout = timeout
  }

  app () {
    return new App(this)
  }

  compute () {
    return new Compute(this)
  }

  kubernetes () {
    return new Kubernetes(this)
  }

  storage () {
    return new Storage(this)
  }

}

export {
  DEFAULT_WAIT_TIMEOUT,
  Gcp as default,
  App,
  Compute,
  Kubernetes,
  Storage,
}
