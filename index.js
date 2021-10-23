const Settings = require('@persistr/settings')
const os = require('os')

let name = '.cli'
const settings = {
  initialize: (toolbox) => {
    const isBrowser = typeof window !== 'undefined' && ({}).toString.call(window) === '[object Window]'
    return {
      toolbox: {
        settings: isBrowser ? Settings.localStorage(`${name}`) : Settings.file(`${os.homedir}/${name}`)
      }
    }
  }
}

settings.name = (n) => {
  name = n
  return settings
}

module.exports = settings
