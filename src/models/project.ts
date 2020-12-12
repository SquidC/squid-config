import { Column, Entity, ObjectIdColumn, Index } from "typeorm";
import { ObjectId } from "mongodb"

/**
 * 项目表
 */
@Entity()
export class Project {

  @ObjectIdColumn()
  _id!: ObjectId;

  /**
   * 名称
   */
  @Column()
  name!: string;

  /**
   * 路径
   */
  @Column()
  @Index({ unique: true })
  path!: string | null;
}
