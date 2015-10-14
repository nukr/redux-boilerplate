import path from 'path'
import koa from 'koa'
import webpack from 'webpack'
import config from './webpack.config.dev.babel'
import serve from 'koa-static'

var app = koa()
var compiler = webpack(config)

app.use(require('koa-webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('koa-webpack-hot-middleware')(compiler))

app.use(serve(path.resolve(__dirname, 'public')))

app.listen(3000)
console.log('Listening at http://localhost:3000')
