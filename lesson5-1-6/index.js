const Koa = require('koa')
const Router = require('koa-router')
const body = require('koa-body')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()

const checkRole = require('./checkRole')
const Result = require('./result')

router.prefix('/api')

router.post('/user', checkRole, async ctx => {
  const { name, email } = ctx.request.body
  if (!name || !email) {
    ctx.body = new Result(404, 'name与email不能为空')
  } else {
    ctx.body = new Result({ name, email }, '上传成功')
  }
})

app.use(body())
app.use(cors())
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)