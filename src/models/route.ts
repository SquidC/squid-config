import { Column, Entity, ObjectIdColumn, ObjectID, OneToOne, JoinColumn } from "typeorm";
import { Translate } from "./translate"
import { Project } from "./project"

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

  /**
   * 版本
   */
  @Column()
  version!: string;
}


/**
 * 路由表
 */
@Entity()
export class Router {

  @ObjectIdColumn()
  id!: ObjectID;

  /**
   * 路径
   */
  @Column()
  path!: string;

  /**
   * 父路由
   */
  // @Column()
  // parentId!: ObjectID;

  /**
   * 路由渲染数据
   */
  @Column(() => RouterMeta)
  meta!: RouterMeta;

  /**
   * 关联项目
   */
  @OneToOne(() => Project)
  @JoinColumn()
  project!: Project;

}
