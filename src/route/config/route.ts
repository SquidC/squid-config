import { ecode } from "lib/ecode/systemCode"
import { Context, Next } from "lib/net/http/context"
import { services } from ".";
import { RouteAdd, RouteFirst } from "src/api/route"

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
    * Router first
  */
  first: async (c: Context, next: Next) => {
    // 获取参数
    const params: RouteFirst = c.query
    const err = c.validate("RouteFirst", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    const res = await svr.config.translate.select(params.path)
    // 参数校验
    c.json(ecode.OK, res, next)
  }
})
