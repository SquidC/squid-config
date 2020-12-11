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
   * Router select
   */
  select: async (projectId?: string, version?: string) => {
    return await dao.mongo.manager.getMongoRepository(Router).find({projectId, version})
  }
})

