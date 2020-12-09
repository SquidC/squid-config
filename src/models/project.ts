import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";


/**
 * 项目表
 */
@Entity()
export class Project {

  @ObjectIdColumn()
  id!: ObjectID;

  /**
   * 名称
   */
  @Column()
  name!: string;

  /**
   * 路径
   */
  @Column()
  path!: string;
}
