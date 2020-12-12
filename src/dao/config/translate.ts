import { ObjectID } from "mongodb";
import { Page } from "src/api/base";
import { Translate } from "src/models/translate";
import { DaoContext } from ".";

/**
 * translate dao
 * @param dao DaoContext dao上下文
 */
export default (dao: DaoContext) => ({
  /**
   * translate add
   */
  add: async (obj: Translate) => {
    return await dao.mongo.manager.save(obj)
  },

  /**
    * translate dels
  */
  dels: async (_ids: string[]) => {
    const ids = _ids.map(el => new ObjectID(el) as any)
    return await dao.mongo.manager.getMongoRepository(Translate).deleteMany({
      _id: {
        $in: ids
      }
    })
  },

  /**
    * translate edit
  */
  edit: async (_id: string, obj: Translate)=> {
    return await dao.mongo.getMongoRepository(Translate)
      .findOneAndUpdate(
        {_id: new ObjectID(_id) as any},
        {$set: obj}
      )
  },

  /**
   * translate select
   */
  select: async (page: Page, path?: string) => {
    const query = {}
    path && (query["path"] = path)
    const res = await dao.mongo.manager.getMongoRepository(Translate).find({
      ...query,
      skip: page.page,
      take: page.size
    })
    const count = await dao.mongo.manager.getMongoRepository(Translate).count()
    return {
      list: res,
      total: count
    }
  }
})

