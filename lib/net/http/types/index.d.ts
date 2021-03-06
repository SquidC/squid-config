/**
 * DefaultState 可以扩展 state
 * DefaultContext 可以扩展 context
 * https://blog.csdn.net/roamingcode/article/details/107084933
*/
import { ValidationError } from "jsonschema"
import Koa from "koa"
import { Code } from "lib/ecode"

declare module "koa" {
  /**
   * 格式化json输出
  */
  interface DefaultContext{
    /**
     * 返回json
     */
    json: (ecode:Code, data:any, next: Koa.Next) => void;
    /**
     * 校验数据
     */
    validate: <T>(path:string, data: T) => ValidationError[] | null;
  }
}
