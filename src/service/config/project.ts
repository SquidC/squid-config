/**
 * 项目
 */
import { Project } from "src/models/project";
import { ServiceContext } from ".";

/**
 * template service
 * @param s ServiceContext service上下文
 */
export default (s: ServiceContext) => ({
  /**
   * template add
   */
  add: async (obj: Project) => {
    // TODO 判断path唯一
    return await s.config.project.add(obj);
  },

  /**
   * template select
  */
  select: async (path?: string) => {
    return await s.config.project.select(path)
  },

})

