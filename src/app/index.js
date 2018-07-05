import Service from '../service'

class App extends Service {

  constructor(keyFilePath) {
    super(keyFilePath, '@google-cloud/app-engine')
  }

}

export default App
