import path from 'path'
import Koa from 'koa'
import webpack from 'webpack'
import config from './webpack.config.dev.babel'
import serve from 'koa-static'
import convert from 'koa-convert'
import Router from 'koa-router'

const router = new Router()
const app = new Koa()
const compiler = webpack(config)

router.get('/gg', async (ctx, next) => {
  ctx.body = 'hihi'
})

app.use(router.routes())
app.use(convert(require('koa-webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})))
app.use(convert(require('koa-webpack-hot-middleware')(compiler)))
app.use(convert(serve(path.resolve(__dirname, 'public'))))

app.listen(3000)
console.log('Listening at http://localhost:3000')
