import Service from '../service'

class AppEngine extends Service {

  constructor(keyFilePath) {
    super(keyFilePath, '@google-cloud/app-engine')
  }

}

export default AppEngine
