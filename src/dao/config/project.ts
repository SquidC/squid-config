import { Project } from "src/models/project";
import { ObjectID } from "mongodb";
import { DaoContext } from ".";
import { Page } from "src/api/base";

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
    * project dels
  */
  dels: async (_ids: string[]) => {
    const ids = _ids.map(el => new ObjectID(el) as any)
    return await dao.mongo.manager.getMongoRepository(Project).deleteMany({
      _id: {
        $in: ids
      }
    })
  },

  /**
    * project edit
  */
  edit: async (_id: string, obj: Project)=> {
    return await dao.mongo.getMongoRepository(Project)
      .findOneAndUpdate(
        {_id: new ObjectID(_id) as any},
        {$set: obj}
      )
  },

  /**
   * Project select
   */
  select: async (page: Page, path?: string) => {
    const query = {}
    path && (query["path"] = path)
    const res = await dao.mongo.manager.getMongoRepository(Project).find({
      ...query,
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
   * Project options
   */
  options: async () => {
    return await dao.mongo.getMongoRepository(Project).aggregate([
      {$project: { label: "$_id", value: "$name", _id: 0 }}
    ]).toArray()
  },

  /**
   * Project first
   */
  first: async (_id: string) => {
    return await dao.mongo.manager.getMongoRepository(Project).findOne({_id: new ObjectID(_id) as any})
  }
})

