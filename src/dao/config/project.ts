import { Project } from "src/models/project";
import { ObjectID } from "mongodb";
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
    return await dao.mongo.manager.getMongoRepository(Project).find({path})
  },

  /**
   * Project first
   */
  first: async (_id: string) => {
    return await dao.mongo.manager.getMongoRepository(Project).findOne({_id: new ObjectID(_id) as any})
  }
})

