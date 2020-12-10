/**
 * 项目
 */
import { ProjectAdd } from "src/api/project";
import { Project } from "src/models/project";
import { ServiceContext } from ".";

/**
 * project service
 * @param s ServiceContext service上下文
 */
export default (s: ServiceContext) => ({
  /**
   * project add
   */
  add: async (params: ProjectAdd) => {
    const obj = new Project()
    obj.path = params.path
    obj.name = params.name
    // TODO 判断path唯一
    return await s.config.project.add(obj);
  },

  /**
   * project select
  */
  select: async (path?: string) => {
    return await s.config.project.select(path)
  },

})

