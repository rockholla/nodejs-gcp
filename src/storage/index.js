import Library from '../library'

class Storage extends Library {

  constructor (gcp) {
    super('@google-cloud/storage', gcp)
  }

}

export default Storage
