import Service from '../service'

class Compute extends Service {

  constructor(keyFilePath) {
    super(keyFilePath, '@google-cloud/compute')
  }

}

export default Compute
