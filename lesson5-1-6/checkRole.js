const Result = require('./result')

module.exports = async (ctx, next) => {
  console.log(ctx.headers)
  if (ctx.headers.role === 'admin') {
    await next()
    return
  }
  ctx.body = new Result(401, 'unauthorized post')
}