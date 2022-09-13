const { defineConfig } = require('cypress')
const path = require('path')
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:screenshot', (details) => {
        // screenshotsフォルダ直下に保存する調整
        const filePathFrom = details.path
        const filePathTo = filePathFrom.replace(/[a-z-]+\.cy\.js/, '')
        fs.renameSync(filePathFrom, filePathTo)

        const dirPath = path.dirname(filePathFrom)
        if (path.basename(dirPath) !== 'screenshots') {
          fs.rmdirSync(dirPath)
        }
        return { path: filePathTo }
      })
    },
  },
})
