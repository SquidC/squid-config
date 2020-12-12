/**
 * 项目
 */
import { ProjectAdd, ProjectEdit, ProjectSelect } from "src/api/project";
import { Dels } from "src/api/base";
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
    return await s.config.project.add(obj);
  },

  /**
    * project dels
  */
  dels: async (params: Dels)=> {
    return await s.config.project.dels(params.ids)
  },

  /**
    * project edit
  */
  edit: async (params: ProjectEdit)=> {
    const obj = new Project()
    obj.path = params.path
    obj.name = params.name
    return await s.config.project.edit(params.id, obj)
  },

  /**
   * project select
  */
  select: async (params: ProjectSelect) => {
    return await s.config.project.select(params, params.path)
  },

})

