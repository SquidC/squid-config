import { ecode } from "lib/ecode/systemCode"
import { Context, Next } from "lib/net/http/context"
import { formatPage } from "src/api/page"
import { RouteAdd, RouteSelete } from "src/api/route"
import { services } from "."

export default (svr: services) => ({
  /**
    * Router add
  */
  add: async (c: Context, next: Next) => {
    // 获取参数 参数校验
    const params: RouteAdd = c.request.body
    const err = c.validate("RouteAdd", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    // obj
    const res = await svr.config.route.add(params)
    c.json(ecode.OK, res, next)
  },

  /**
    * Router select
  */
  select: async (c: Context, next: Next) => {
    // 获取参数
    const params: RouteSelete = c.query
    formatPage(params)
    const err = c.validate("RouteSelete", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
      return
    }
    const res = await svr.config.route.select(params)
    // 参数校验
    c.json(ecode.OK, res, next)
  }
})
