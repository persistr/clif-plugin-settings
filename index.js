const Settings = require('@persistr/settings')
const os = require('os')
module.exports = {
  initialize: (toolbox) => {
    const isBrowser = typeof window !== 'undefined' && ({}).toString.call(window) === '[object Window]'
    if (isBrowser) {
      toolbox.settings = Settings.localStorage('.persistr.cli')
    }
    else {
      toolbox.settings = Settings.file(`${os.homedir}/.persistr.cli`)
    }
  }
}
