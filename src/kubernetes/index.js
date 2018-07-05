import Service from '../service'

class Kubernetes extends Service {

  constructor(keyFilePath) {
    super(keyFilePath, '@google-cloud/container')
    this.clusterManager = new this.service.v1.ClusterManagerClient({
      projectId: require(this.keyFilePath).project_id,
      keyFilename: this.keyFilePath,
    })
  }

}

export default Kubernetes
