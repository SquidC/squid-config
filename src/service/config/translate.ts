import { TranslateAdd } from "src/api/translate";
import { Translate } from "src/models/translate";
import { ServiceContext } from ".";

/**
 * translate service
 * @param s ServiceContext service上下文
 */
export default (s: ServiceContext) => ({
  /**
   * translate add
   */
  add: async (params: TranslateAdd) => {
    const obj = new Translate()
    obj.path = params.path
    obj.defaultValue = params.defaultValue
    return await s.config.translate.add(obj);
  },

  /**
   * translate select
  */
  select: async (path?: string) => {
    return await s.config.translate.select(path)
  },

})

