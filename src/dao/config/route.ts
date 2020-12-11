import { Page } from "src/api/page";
import { Router } from "src/models/route";
import { DaoContext } from ".";

/**
 * Router dao
 * @param dao DaoContext dao上下文
 */
export default (dao: DaoContext) => ({

  /**
  * Router add many
  */
  addMany: async (obj: Router[]) => {
    return await dao.mongo.manager.save(obj)
  },

  /**
   * Router select
   */
  select: async (page: Page, projectId?: string, version?: string) => {
    const res = await dao.mongo.manager.getMongoRepository(Router).find({
      projectId, version,
      skip: page.page,
      take: page.size
    })
    return {
      list: res,
      total: await dao.mongo.manager.getMongoRepository(Router).count(),
    }
  }
})

