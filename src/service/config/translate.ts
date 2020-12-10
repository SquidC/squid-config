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
    // TODO 判断path唯一
    return await s.config.translate.add(obj);
  },

  /**
   * template select
  */
  select: async (path?: string) => {
    return await s.config.translate.select(path)
  },

})

