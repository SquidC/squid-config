import { Column, Entity, ObjectIdColumn, OneToOne, JoinColumn, Index } from "typeorm";
import { ObjectId } from "mongodb"
import { Translate } from "./translate"

/**
 * 路由元素据
 */
export class RouterMeta {

  /**
   * 路由
   */
  @Column()
  icon!: string;

  /**
   * 页面名称
   */
  @OneToOne(() => Translate)
  @JoinColumn()
  name!: Translate;

}


/**
 * 路由表
 */
@Entity()
@Index(["path", "version"], { unique: true })
export class Router {

  @ObjectIdColumn()
  _id!: ObjectId;

  /**
   * 路径
   */
  @Column()
  path!: string;

  /**
   * 父路由
   */
  @Column()
  parentId!: string;

  /**
   * 路由渲染数据
   */
  @Column(() => RouterMeta)
  meta!: RouterMeta;

  /**
   * 关联项目
   */
  @Column()
  projectId!: string;

  /**
   * 路由结构版本
   */
  @Column()
  version!: string;
}
