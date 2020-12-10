import { ecode } from "lib/ecode/systemCode"
import { Context, Next } from "lib/net/http/context"
import { services } from ".";
import { ProjectAdd, ProjectFirst } from "src/api/project"

export default (svr: services) => ({
  /**
    * project add
  */
  add: async (c: Context, next: Next) => {
    // 获取参数 参数校验
    const params: ProjectAdd = c.request.body
    const err = c.validate("ProjectAdd", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
      return
    }
    const res = await svr.config.project.add(params)
    c.json(ecode.OK, res, next)
  },

  /**
    * project first
  */
  first: async (c: Context, next: Next) => {
    // 获取参数
    const params: ProjectFirst = c.query
    const err = c.validate("ProjectFirst", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    const res = await svr.config.project.select(params.path)
    // 参数校验
    c.json(ecode.OK, res, next)
  }
})
