import { Project } from "src/models/project";
import { DaoContext } from ".";

/**
 * Project dao
 * @param dao DaoContext dao上下文
 */
export default (dao: DaoContext) => ({
  /**
   * Project add
   */
  add: async (obj: Project) => {
    return await dao.mongo.manager.save(obj)
  },

  /**
   * Project select
   */
  select: async (path?: string) => {
    return await dao.mongo.manager.getMongoRepository(Project).findOne({path})
  }
})

