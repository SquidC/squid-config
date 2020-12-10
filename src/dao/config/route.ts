import { Router } from "src/models/route";
import { DaoContext } from ".";

/**
 * Project dao
 * @param dao DaoContext dao上下文
 */
export default (dao: DaoContext) => ({
  /**
   * Project add
   */
  add: async (obj: Router) => {
    return await dao.mongo.manager.save(obj)
  },

  /**
   * Project select
   */
  select: async (path?: string) => {
    return await dao.mongo.manager.getMongoRepository(Router).findOne({path})
  }
})

