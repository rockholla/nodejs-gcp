import Service from '../service'

class Container extends Service {

  constructor(keyFilePath) {
    super(keyFilePath, '@google-cloud/container')
  }

}

export default Container
