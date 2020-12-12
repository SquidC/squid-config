import { ObjectID } from "mongodb";
import { Page } from "src/api/base";
import { Router } from "src/models/route";
import { DaoContext } from ".";

/**
 * Router dao
 * @param dao DaoContext dao上下文
 */
export default (dao: DaoContext) => ({

  /**
  * Router add many
  */
  addMany: async (obj: Router[]) => {
    return await dao.mongo.manager.save(obj)
  },

  /**
    * Router dels
  */
  dels: async (version: string) => {
    const routes = await dao.mongo.getMongoRepository(Router).find({
      select: ["_id"],
      where: {
        version
      }
    })
    const ids = routes.map(el => new ObjectID(el._id) as any)
    return await dao.mongo.manager.getMongoRepository(Router).deleteMany({
      _id: {
        $in: ids
      }
    })
  },

  /**
    * Router edit
  */
  edit: async (_id: string, obj: Router)=> {
    return await dao.mongo.getMongoRepository(Router)
      .findOneAndUpdate(
        {_id: new ObjectID(_id) as any},
        {$set: obj}
      )
  },

  /**
   * Router select
   */
  select: async (page: Page, projectId?: string, version?: string) => {
    const query = {}
    projectId && (query["projectId"] = projectId)
    version && (query["version"] = version)
    const res = await dao.mongo.manager.getMongoRepository(Router).find({
      ...query,
      skip: page.page,
      take: page.size
    })
    const count = await dao.mongo.manager.getMongoRepository(Router).count()
    return {
      list: res,
      total: count
    }
  }
})

