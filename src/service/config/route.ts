/**
 * 路由
 */
import { RouteAdd } from "src/api/route";
import { Router } from "src/models/route";
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
    const project = await s.config.project.first(obj.project)
    if(project) {
      const routes: Router[] =[];
      obj.route.forEach(el => {
        const tmp = new Router()
        tmp.path = el.path,
        tmp.meta = el.meta,
        tmp.project = project,
        tmp.parentId = "0",
        routes.push(tmp)
      })
      const res = await s.config.route.addMany(routes);
      console.log(res)
    }
  },

  /**
   * route select
  */
  select: async (path?: string) => {
    return await s.config.route.select(path)
  },

})

