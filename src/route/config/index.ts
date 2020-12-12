import { Router } from "lib/net/http/route"
import configSvr = require("src/service/config")
import conf = require("src/conf")
import translate from "./translate"
import project from "./project"
import route from "./route"

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
  const routeRoute = route(services)

  /**
   * 生成路由表
   * 📌 路由名一定要唯一
   */
  router.prefix("/config")

  router.post("/translate/add", translateRoute.add)
  router.post("/translate/dels", translateRoute.dels)
  router.post("/translate/edit", translateRoute.edit)
  router.get("/translate/select", translateRoute.select)

  router.post("/project/add", projectRoute.add)
  router.post("/project/dels", projectRoute.dels)
  router.post("/project/edit", projectRoute.edit)
  router.get("/project/select", projectRoute.select)

  router.post("/route/add", routeRoute.add)
  router.post("/route/dels", routeRoute.dels)
  router.post("/route/edit", routeRoute.edit)
  router.get("/route/select", routeRoute.select)

}
