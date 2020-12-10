/**
 * 路由
 */
import { RouteAdd } from "src/api/route";
// import { Router } from "src/models/route";
import { ServiceContext } from ".";

/**
 * route service
 * @param s ServiceContext service上下文
 */
export default (s: ServiceContext) => ({
  /**
   * route add
   */
  add: async (obj: RouteAdd) => {
    // TODO 判断path唯一
    obj
    // const projectId = await s.config.project.first(obj.project)
    // let routes: Router[];
    // obj.route.forEach(el => {
    //   routes.push({
    //     path: el.path,
    //     meta: el.meta,

    //   })
    // })
  },

  /**
   * route select
  */
  select: async (path?: string) => {
    return await s.config.route.select(path)
  },

})

