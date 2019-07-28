let Koa = require('koa')
let KoaRouter = require('koa-router')
let datas = require('./datas/data.json')
const app = new Koa()
const router = new KoaRouter()
router.get('/', (ctx, next) => {
  // let req = ctx.query.req
  // console.log(req)
  ctx.body = '我怎么这么好看'
  // ctx.body = datas
  // console.log(datas)
})
// 根据用户传过来的参数返回相应的数据
router.get('/searchBooks', (ctx, next) => {
  // 获取用户传进来的参数
  let req = ctx.query.req
  console.log(req)
  ctx.body = datas
})
app
  .use(router.routes()) // 声明使用路由
  .use(router.allowedMethods()) // 声明使用所有方法
app.listen('3000', () => {
  console.log('服务器启动成功')
  console.log('当前地址:http://localhost:3000')
})
