import { Project } from "src/models/project";
import { ObjectID } from "mongodb";
import { DaoContext } from ".";
import { Page } from "src/api/page";

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
  select: async (page:Page, path?: string) => {
    const res = await dao.mongo.manager.getMongoRepository(Project).find({
      path,
      skip: page.page,
      take: page.size
    })
    const count = await dao.mongo.manager.getMongoRepository(Project).count()
    return {
      list: res,
      total: count
    }
  },

  /**
   * Project first
   */
  first: async (_id: string) => {
    return await dao.mongo.manager.getMongoRepository(Project).findOne({_id: new ObjectID(_id) as any})
  }
})

