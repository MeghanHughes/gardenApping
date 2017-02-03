const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const api = require('./api')
const session = require('express-session')

module.exports = function (db) {
  const app = express()

  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
  }))

  if (app.get('env') === 'development') {
    // bundle client/index.js
    // and serve it at GET /bundle.js
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const config = require('./webpack.config')
    const webpack = require('webpack')
    const compiler = webpack(config)
    const livereload = require('livereload')
    const lrserver = livereload.createServer()

    lrserver.watch([
      __dirname + "/public",
      __dirname + "/src",
    ])

    app.use(require('inject-lr-script')())

    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }))
  }


  // static files
  app.use('/', express.static(path.join(__dirname, 'public')))

  // routes
  app.use('/api/v1/', api.myRoute(db))

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500)
      res.json({
        message: err.message,
        error: err
      })
    })
  }

  app.get('/', function (req, res, next) {
    var sess = req.session

    res.send(req.session.name)
  })

  app.get('/login', function (req, res, next) {
    var sess = req.session
    if (sess.views) {
      sess.views++
      res.setHeader('Content-Type', 'text/html')
      res.write('<p>views: ' + sess.views + '</p>')
      res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
      res.end()
    } else {
      sess.views = 1
      res.end('welcome to the session demo. refresh!')
    }
  })
  // 
  // app.get('/logout', function(req, res, next){
  //   req.session.destroy(function(err) {
  //     console.log('error');
  //   })
  //   res.send('logging out no more cookies')
  // })

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: {}
    })
  })

  return app
}
