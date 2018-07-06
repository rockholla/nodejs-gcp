import Service from '../service'

class App extends Service {

  constructor (gcp) {
    super('@google-cloud/app-engine', gcp)
  }

}

export default App
