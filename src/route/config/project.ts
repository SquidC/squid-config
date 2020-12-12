import { ecode } from "lib/ecode/systemCode"
import { Context, Next } from "lib/net/http/context"
import { services } from ".";
import { ProjectAdd, ProjectSelect } from "src/api/project"
import { formatPage } from "src/api/page";

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
    * project select
  */
  select: async (c: Context, next: Next) => {
    // 获取参数
    const params: ProjectSelect = c.query
    const err = c.validate("ProjectSelect", params)
    formatPage(params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    const res = await svr.config.project.select(params)
    // 参数校验
    c.json(ecode.OK, res, next)
  }
})
