import Service from '../service'

class Storage extends Service {

  constructor (gcp) {
    super('@google-cloud/storage', gcp)
  }

}

export default Storage
