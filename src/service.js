import fs from 'fs'

class Service {

  constructor (keyFilePath, sdkPackage = null) {
    if (!keyFilePath) {
      throw new Error('No service account key file was provided for the gcpe service')
    }
    if (!fs.existsSync(keyFilePath)) {
      throw new Error(`The service account key file path (${keyFilePath}) passed to the gcpe service doesn't exist`)
    }
    try {
      const keyFile = require(keyFilePath)
      if (!keyFile.private_key) {
        throw new Error('gcpe key file path provided was found, but not a valid key file')
      }
    } catch (error) {
      throw new Error(`Error loading gcpe key file at ${keyFilePath}: ${error.message}`)
    }
    this.keyFilePath = keyFilePath
    try {
      this.service = require(sdkPackage || 'null')
    } catch (error) {
      this.service = null
    }
  }

}

export default Service
