const path  = require('path')
const Gcp   = require('../../lib')
const winston = require('winston')

const k8s = new Gcp.Kubernetes({ keyFilePath: path.resolve(__dirname, 'nodejs-gcp-dev-51b7d6f78920.json'), logger: console })
const clusterDefinition = {
  nodePools: [{
    name: 'my-test-cluster-pool',
    initialNodeCount: 1
  }]
}
k8s.ensureCluster('my-test-cluster', 'us-west1-a', clusterDefinition).then((cluster) => {
  console.log(cluster)
  return k8s.deleteCluster('my-test-cluster', 'us-west1-a')
}).catch((error) => {
  console.error(error)
})
