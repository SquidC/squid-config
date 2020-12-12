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
    * project dels
  */
  dels: ()=> {
    //
  },

  /**
    * project edit
  */
  edit: ()=> {
    //
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

