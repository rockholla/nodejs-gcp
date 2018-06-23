import Service from '../service'

class Storage extends Service {

  constructor(keyFilePath) {
    super(keyFilePath, '@google-cloud/storage')
  }

}

export default Storage
