import path from 'path'
import App from '../../lib/app'

describe('app', () => {

  it('App constructor should work', () => {
    expect(new App({ keyFilePath: path.resolve(__dirname, '..', '.assets', 'dummy-key.json') })).toBeInstanceOf(App)
  })

})
