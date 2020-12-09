import { Router } from "lib/net/http/route"
import configSvr = require("src/service/config")
import conf = require("src/conf")
import translate from "./translate"

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

  // 生成路由表
  router.prefix("/config/translate")
  router.post("/add", translateRoute.add)
  router.get("/first", translateRoute.first)
}
