import { ecode } from "lib/ecode/systemCode"
import { Context, Next } from "lib/net/http/context"
import { services } from ".";
import { TranslateSelect, TranslateAdd } from "src/api/translate"
import { formatPage } from "src/api/base";

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
  dels: ()=> {
    //
  },

  /**
    * translate edit
  */
  edit: ()=> {
    //
  },

  /**
    * translate select
  */
  select: async (c: Context, next: Next) => {
    // 获取参数
    const params: TranslateSelect = c.query
    const err = c.validate("TranslateSelect", params)
    formatPage(params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    const res = await svr.config.translate.select(params)
    // 参数校验
    c.json(ecode.OK, res, next)
  }
})
