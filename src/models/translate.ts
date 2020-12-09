/**
 * 翻译
 */
import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class Translate {

  @ObjectIdColumn()
  id!: ObjectID;

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
