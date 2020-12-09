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
   * translate first
   */
  first: async () => {
    // route
  }
})

