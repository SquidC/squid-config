/**
 * 路由
 */
import { Table2Tree, Tree2Table } from "lib/utils/tree";
import { ObjectId } from "mongodb";
import { RouteAdd, RouteSelete } from "src/api/route";
import { Router } from "src/models/route";
import { ServiceContext } from ".";

/**
 * route service
 * @param s ServiceContext service上下文
 */
export default (s: ServiceContext) => ({
  /**
   * route add
   * cli推到服务端 直接全部插入 需要保证每次版本不一样
   */
  add: async (obj: RouteAdd) => {
    const project = await s.config.project.first(obj.project)
    if (project) {
      const routes: Router[] =[];
      Tree2Table(obj.route, "0", (el, parentId) => {
        const id = new ObjectId();
        const tmp = new Router();
        tmp._id = id
        tmp.path = el.path
        tmp.meta = el.meta
        tmp.version = obj.version
        tmp.projectId = project._id.toHexString()
        tmp.parentId = parentId
        routes.push(tmp)
        return id.toHexString() // 子元素使用id
      })
      const res = await s.config.route.addMany(routes)
      return res
    }
  },

  /**
    * route dels
  */
  dels: ()=> {
    //
  },

  /**
   * route select
  */
  select: async (params: RouteSelete) => {
    const { page, size, projectId, version } = params;
    const routes = await s.config.route.select({page, size}, projectId, version)
    const routesKV: Record<string, any> = {}
    routes.list.forEach(route => {
      routesKV[route._id.toHexString()] = {
        children: [],
        ...route
      }
    })
    Table2Tree(routesKV)
    routes.list = Object.values(routesKV)
    return routes
  },

})

