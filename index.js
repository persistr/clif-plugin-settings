const Settings = require('@persistr/settings')
const os = require('os')

let name = '.cli'
const settings = {
  initialize: (toolbox) => {
    const isBrowser = typeof window !== 'undefined' && ({}).toString.call(window) === '[object Window]'
    if (isBrowser) {
      toolbox.settings = Settings.localStorage(`${name}`)
    }
    else {
      toolbox.settings = Settings.file(`${os.homedir}/${name}`)
    }
  }
}

settings.name = (n) => {
  name = n
  return settings
}

module.exports = settings
