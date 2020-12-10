/**
 * 翻译
 */
import { ObjectID, Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class Translate {

  @ObjectIdColumn()
  _id!: ObjectID;

  /**
   * i18n索引路径
   */
  @Column()
  path!: string;

  /**
   * 默认名称
   */
  @Column()
  defaultValue!: string;

}
