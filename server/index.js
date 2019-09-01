const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

/**
 * Hey there! Here is the exercice, if no docker-compose.yml please use
 * _ docker build -t “upfactor” .
 * _ docker run --rm -it -p 5000:5000/tcp upfactor
 * for exemple, using your favourite terminal
 * 
 * - Juste made a page and build a small evolutive structure to complete a vue using a static json file.
 * - Made class available to show possibility to create a real structure
 */

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}  in container\n
              please go to http://localhost:5000/exercice1
              Ready to rock UPFACTOR TEST`,
    badge: true
  })
}
start()
