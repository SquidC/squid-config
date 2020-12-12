/**
 * 路由
 */
import { Tree2Table } from "lib/utils/tree";
import { ObjectId } from "mongodb";
import { RouteAdd, RouteDels, RouteEdit, RouteSelete } from "src/api/route";
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
  dels: async (params: RouteDels)=> {
    return await s.config.route.dels(params.version)
  },

  /**
    * route edit
    * 只可以改属性 不可以改层级
  */
  edit: async (params: RouteEdit)=> {
    const obj = new Router()
    obj.path = params.path
    obj.meta = params.meta
    return await s.config.route.edit(params.id, obj)
  },

  /**
   * route select
  */
  select: async (params: RouteSelete) => {
    const { page, size, projectId, version } = params;
    const routes = await s.config.route.select({page, size}, projectId, version)
    // const routesKV: Record<string, any> = {}
    // routes.list.forEach(route => {
    //   routesKV[route._id.toHexString()] = {
    //     children: [],
    //     ...route
    //   }
    // })
    // Table2Tree(routesKV)
    // routes.list = Object.values(routesKV)
    return routes
  },

})

