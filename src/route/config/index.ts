import { Router } from "lib/net/http/route"
import configSvr = require("src/service/config")
import conf = require("src/conf")
import translate from "./translate"
import project from "./project"

/**
 * 依赖服务
 */
export interface services {
  config: NonPromise<ReturnType<typeof configSvr.New>>;
}

/**
 * 创建路由
 */
export async function New(c: conf.Config, router: Router) {
  const configService = await configSvr.New(c);
  // 初始化服务
  const services: services = {
    config: configService
  }
  // 初始化路由
  const translateRoute = translate(services)
  const projectRoute = project(services)

  /**
   * 生成路由表
   * 📌 路由名一定要唯一
   */
  router.prefix("/config")

  router.post("/translate/add", translateRoute.add)
  router.get("/translate/first", translateRoute.first)

  router.post("/project/add", projectRoute.add)
  router.get("/project/first", projectRoute.first)

}
