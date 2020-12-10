import configDao = require("src/dao/config")
import translate from "./translate"
import project from "./project"
import route from "./route"
import conf = require("src/conf")
// import { NonPromise } from "lib/types";

/**
 * service上下文 依赖的dao
 */
export interface ServiceContext {
  config: NonPromise<ReturnType<typeof configDao.New>>;
}


/**
 * 新建一个Dao对象
 * @param c Dao配置
 */
export async function New(c: conf.Config) {
  const templateDAO = await configDao.New(c);

  // 初始化服务
  const service: ServiceContext = {
    config: templateDAO,
  }

  return {
    translate: translate(service),
    project: project(service),
    route: route(service),
  }
}
