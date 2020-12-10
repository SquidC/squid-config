import Koa = require("koa")
import { Schema, Validator } from "jsonschema"
import { Code } from "lib/ecode"

export type Context = Koa.Context;

export type Next = Koa.Next;


export function defineContextFunction(engine: Koa<Koa.DefaultState, Koa.Context>, schema: Schema){

  /**
   * ⭐ 格式化放回
   */
  engine.context.json = async function(ecode: Code, data: any, next: Koa.Next) {
    const code = ecode.Code()

    // http code
    if(code < 0) {
      this.status = 500
    } else {
      this.status = 200
    }

    // data code
    this.body = {
      code: code,
      meseage: ecode.Message(),
      data: data
    }
    await next()
  }


  /**
   * ⭐ 加载字段校验模块
  */

  const v = new Validator()
  v.addSchema(schema, "/api")

  engine.context.validate = function<T>(path:string, data:T) {
    const validate = v.validate(data, {
      $ref: `api#/definitions/${path}`
    })
    if(validate.valid) {
      return null
    } else {
      return validate.errors
    }
  }
}
