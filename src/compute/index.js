import Service from '../service'

class Compute extends Service {

  constructor (gcp) {
    super('@google-cloud/compute', gcp)
  }

}

export default Compute
