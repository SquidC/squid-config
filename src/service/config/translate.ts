import { Translate } from "src/models/translate";
import { ServiceContext } from ".";

/**
 * template service
 * @param s ServiceContext service上下文
 */
export default (s: ServiceContext) => ({
  /**
   * template add
   */
  add: async (obj: Translate) => {
    return await s.config.translate.add(obj);
  },

  /**
   * template first
  */
  first: async () => {
    return await s.config.translate.first()
  },

})

