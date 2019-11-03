const path = require('path')
const chokidar = require('chokidar') // detect file change
const chalk = require('chalk') // Terminal string styling done right. Much color.
const serverDestroy = require('server-destroy')
const argv = require('yargs').argv
const jsonServer = require('json-server')

process.env.NODE_ENV = 'production'
console.log(process.argv)
console.log(process.env.NODE_ENV)
var mockServer;

const serve = callback => {
  let apiLists = path.resolve(__dirname, './src/config/apis.js')
  delete require.cache[apiLists]
  let routes = require(apiLists)

  server = jsonServer.create()
  let middlewares = jsonServer.defaults()

  server.use(middlewares)

  // add mock api endpoint
  Object.keys(routes).map(name => {
    let json = path.resolve(__dirname, routes[name])
    server.use(name, (req, res) => res.sendFile(json))
  })

  // handle POST request
  server.use(jsonServer.bodyParser)
  server.use(function (req, res, next) {
    if (req.method === 'POST') {
      req.body.createdAt = Date.now()
    }
    next()
  })

  mockServer = server.listen(3000, function () {
    console.log(chalk.green('Mock Server is running at port: http://127.0.0.1:' + 3000))
  })

  serverDestroy(mockServer)

  callback && callback()
}

serve(() => {
  let watchFile = ['mock', './src/config/apis.js']

  let restartMockServer = (file) => {
    console.log('----------------------')
    console.log(chalk.red(chalk.cyan.underline(file) + ' has changed, Restarting mock server...'))
    console.log('----------------------')

    mockServer && mockServer.destroy()
    serve()
  }

  // watch `/mock/*/**.json`, `src/config/apis.js` file change
  // once detect any change restart mockServer
  chokidar.watch(watchFile).on('change', (file) => {
    restartMockServer(file)
  })

})



