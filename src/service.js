import fs from 'fs'
import sleep from 'sleep'
import { DEFAULT_WAIT_TIMEOUT } from './constants'

class Service {

  constructor (sdkPackage, gcp) {
    if (!gcp || !gcp.keyFilePath) {
      throw new Error('No service account key file was provided for the @rockholla/gcp service')
    }
    if (!fs.existsSync(gcp.keyFilePath)) {
      throw new Error(`The service account key file path (${gcp.keyFilePath}) passed to the @rockholla/gcp service doesn't exist`)
    }
    try {
      const keyFile = require(gcp.keyFilePath)
      if (!keyFile.private_key) {
        throw new Error('@rockholla/gcp key file path provided was found, but not a valid key file')
      }
    } catch (error) {
      throw new Error(`Error loading @rockholla/gcp key file at ${gcp.keyFilePath}: ${error.message}`)
    }
    this.keyFilePath  = gcp.keyFilePath
    this.projectId    = require(this.keyFilePath).project_id
    this.logger       = gcp.logger
    this.waitTimeout  = gcp.waitTimeout || DEFAULT_WAIT_TIMEOUT
    try {
      this.Service = require(sdkPackage)
    } catch (error) {
      this.Service = null
    }
  }

  isError (type, error) {
    if (error.message.split(':')[0].trim().split(' ').slice(-1).pop() === type) {
      return true
    }
    return false
  }

  async waitForMethodToReturn (method, args, expected, options, timeElapsed = 0) {
    options.context   = options.context || null
    options.interval  = options.interval || 5
    let expectedValue = expected
    if (timeElapsed >= this.waitTimeout && this.waitTimeout > 0) {
      throw new Error(`Timeout of ${this.waitTimeout} seconds reached waiting for ${method.name} to return expected value ${expected.value || expected}`)
    }
    let result = await method.apply(options.context, args)
    let resultFull = result
    if (result instanceof Array && result.length === 1) result = result[0]
    if (expected instanceof Object && expected.path && expected.value) {
      expected.path.split('.').forEach((part) => {
        result = result && result[part] ? result[part] : null
      })
      expectedValue = expected.value
    }
    if (result !== expectedValue) {
      this.logger.debug(`Still waiting for expected ${expectedValue} from ${method.name}`)
      sleep.sleep(options.interval)
      return this.waitForMethodToReturn(method, args, expected, options, timeElapsed + options.interval)
    }
    return resultFull
  }

}

export default Service
