class Logger {

  constructor (logger = null) {
    this._logger = logger
    return new Proxy(this, {
      get (target, name) {
        if (name.match(/^_/)) {
          return target[name]
        }
        if (!target._logger) {
          return (() => {})
        }
        if (target._logger[name]) {
          return target._logger[name]
        } else {
          return target._logger.info || target._logger.log || console.log
        }
      }
    })
  }

}

export default Logger
