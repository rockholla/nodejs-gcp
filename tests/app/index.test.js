import path from 'path'
import App from '../../lib/app'

describe('app', () => {

  it('App constructor should work', () => {
    expect(new App(path.resolve(__dirname, '..', '.assets', 'dummy-key.json'))).toBeInstanceOf(App)
  })

})
