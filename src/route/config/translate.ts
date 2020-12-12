import { ecode } from "lib/ecode/systemCode"
import { Context, Next } from "lib/net/http/context"
import { services } from ".";
import { TranslateSelect, TranslateAdd, TranslateEdit } from "src/api/translate"
import { Dels, formatPage } from "src/api/base";

export default (svr: services) => ({
  /**
    * translate add
  */
  add: async (c: Context, next: Next) => {
    // 获取参数 参数校验
    const params: TranslateAdd = c.request.body
    const err = c.validate("TranslateAdd", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    const res = await svr.config.translate.add(params)
    c.json(ecode.OK, res, next)
  },

  /**
    * translate dels
  */
  dels: async (c: Context, next: Next) => {
    const params: Dels = c.request.body
    const err = c.validate("Dels", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
      return
    }
    const res = await svr.config.translate.dels(params)
    c.json(ecode.OK, res, next)
  },

  /**
    * translate edit
  */
  edit: async (c: Context, next: Next)=> {
    const params: TranslateEdit = c.request.body
    const err = c.validate("TranslateEdit", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
      return
    }
    const res = await svr.config.translate.edit(params)
    c.json(ecode.OK, res, next)
  },

  /**
    * translate select
  */
  select: async (c: Context, next: Next) => {
    // 获取参数
    const params: TranslateSelect = c.query
    formatPage(params)
    const err = c.validate("TranslateSelect", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    const res = await svr.config.translate.select(params)
    // 参数校验
    c.json(ecode.OK, res, next)
  }
})
