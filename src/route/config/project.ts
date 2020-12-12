import { ecode } from "lib/ecode/systemCode"
import { Context, Next } from "lib/net/http/context"
import { services } from ".";
import { ProjectAdd, ProjectEdit, ProjectSelect } from "src/api/project"
import { Dels, formatPage } from "src/api/base";

export default (svr: services) => ({
  /**
    * project add
  */
  add: async (c: Context, next: Next) => {
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
    * project dels
  */
  dels: async (c: Context, next: Next) => {
    const params: Dels = c.request.body
    const err = c.validate("Dels", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
      return
    }
    const res = await svr.config.project.dels(params)
    c.json(ecode.OK, res, next)
  },

  /**
  * project edit
  */
  edit: async (c: Context, next: Next)=> {
    const params: ProjectEdit = c.request.body
    const err = c.validate("ProjectEdit", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
      return
    }
    const res = await svr.config.project.edit(params)
    c.json(ecode.OK, res, next)
  },

  /**
    * project select
  */
  select: async (c: Context, next: Next) => {
    // 获取参数
    const params: ProjectSelect = c.query
    formatPage(params)
    const err = c.validate("ProjectSelect", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    const res = await svr.config.project.select(params)
    // 参数校验
    c.json(ecode.OK, res, next)
  },

  /**
   * project options
   */
  options: async (c: Context, next: Next) => {
    const res = await svr.config.project.options()
    c.json(ecode.OK, res, next)
  }
})
