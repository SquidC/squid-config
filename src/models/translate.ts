/**
 * 翻译
 */
import { ObjectId } from "mongodb"
import { Column, Entity, ObjectIdColumn, Index } from "typeorm";

@Entity()
export class Translate {

  @ObjectIdColumn()
  _id!: ObjectId;

  /**
   * i18n索引路径
   */
  @Column()
  @Index({ unique: true })
  path!: string;

  /**
   * 默认名称
   */
  @Column()
  defaultValue!: string;

}
