const settings = require('@persistr/settings')
const os = require('os')
module.exports = {
  initialize: (toolbox) => {
    const isBrowser = typeof window !== 'undefined' && ({}).toString.call(window) === '[object Window]'
    if (isBrowser) {
      settings.cfgUseLocalStorage('.persistr.cli')
    }
    else {
      settings.cfgUseFile(`${os.homedir}/.persistr.cli`)
    }
    toolbox.settings = settings
  }
}
