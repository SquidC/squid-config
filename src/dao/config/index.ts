import conf = require("src/conf")
// import mysql = require("lib/database/mysql")
import mongo = require("lib/database/mongo")
import models = require("src/models")
import translate from "./translate"
import project from "./project"
import route from "./route"
/**
 * dao
 */
export interface DaoContext {
  // mysql: mysql.ORM; // mysql 数据库
  mongo: mongo.ORM; // mongo 数据库
}

/**
 * 新建一个Dao对象
 * @param c Dao配置
 */
export async function New(c: conf.Config) {
  // 初始化mysql服务
  // const ormLib = await mysql.New(c.MYSQL, models.mysql)
  // 初始化mongodb服务
  const mongoLib = await mongo.New(c.MONGODB, models.mongo)

  // 初始化dao
  const dao: DaoContext = {
    // mysql: ormLib,
    mongo: mongoLib,
  }

  return {
    translate: translate(dao),
    project: project(dao),
    route: route(dao),
  }

}
