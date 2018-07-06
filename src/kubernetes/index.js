import Service from '../service'

class Kubernetes extends Service {

  constructor (gcp) {
    super('@google-cloud/container', gcp)
    this.clusterManager = new this.service.v1.ClusterManagerClient({
      projectId: this.projectId,
      keyFilename: this.keyFilePath,
    })
  }

  getCluster (id, zone) {
    return this.clusterManager.getCluster({
      projectId: this.projectId,
      zone: zone,
      clusterId: id,
    })
  }

  ensureCluster (id, zone, clusterDefinition) {
    let created             = false
    clusterDefinition.name  = id
    return this.getCluster(id, zone).then((response) => {
      return response[0]
    }).catch((error) => {
      if (this.isError('NOT_FOUND', error)) {
        return this.clusterManager.createCluster({
          projectId: this.projectId,
          zone: zone,
          cluster: clusterDefinition
        }).then(() => {
          created = true
          return this.waitForMethodToReturn(
            this.getCluster,
            [id, zone],
            {
              path: 'status',
              value: 'RUNNING'
            },
            {
              interval: 10,
              context: this,
            },
          )
        })
      } else {
        throw error
      }
    }).then((cluster) => {
      if (!created) {
        // TODO: implement cluster updating ability
        return cluster
      }
      return cluster
    })
  }

  deleteCluster (id, zone) {
    return this.clusterManager.deleteCluster({
      projectId: this.projectId,
      zone: zone,
      clusterId: id,
    }).then((operation) => {
      return this.waitForMethodToReturn(
        this.clusterManager.getOperation,
        [{
          projectId: this.projectId,
          zone: zone,
          operationId: operation[0].name
        }],
        {
          path: 'status',
          value: 'DONE',
        },
        {
          interval: 10,
          context: this.clusterManager,
        },
      )
    }).catch((error) => {
      throw error
    })
  }

}

export default Kubernetes
