import { ecode } from "lib/ecode/systemCode"
import { Context, Next } from "lib/net/http/context"
import { Translate } from "src/models/translate";
import { services } from ".";

export default (svr: services) => ({
  /**
    * translate add
  */
  add: async (c: Context, next: Next) => {
    // 获取参数 参数校验
    const params: translate.add = c.request.body
    const err = c.validate("translate.add", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    const translateObj = new Translate()
    translateObj.path = params.path
    translateObj.defaultValue = params.defaultValue
    const res = await svr.config.translate.add(translateObj)
    c.json(ecode.OK, res, next)
  },

  /**
    * translate first
  */
  first: async (c: Context, next: Next) => {
    // 获取参数
    const params: translate.first = c.query
    const err = c.validate("translate.first", params)
    if(err) {
      c.json(ecode.ParamsErr, null, next)
    }
    const res = await svr.config.translate.select(params.path)
    // 参数校验
    c.json(ecode.OK, res, next)
  }
})
