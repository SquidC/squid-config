import { Dels } from "src/api/base";
import { TranslateAdd, TranslateEdit, TranslateSelect } from "src/api/translate";
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
    * translate dels
  */
  dels: async (params: Dels)=> {
    return await s.config.translate.dels(params.ids)
  },

  /**
    * translate edit
  */
  edit: async (params: TranslateEdit)=> {
    const obj = new Translate()
    obj.path = params.path
    obj.defaultValue = params.defaultValue
    return await s.config.translate.edit(params.id, obj)
  },

  /**
   * translate select
  */
  select: async (params: TranslateSelect) => {
    return await s.config.translate.select(params, params.path)
  },

})

