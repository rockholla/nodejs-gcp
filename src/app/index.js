import Library from '../library'

class App extends Library {

  constructor (gcp) {
    super('@google-cloud/app-engine', gcp)
  }

}

export default App
