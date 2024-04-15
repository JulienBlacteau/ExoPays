import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export default class Country {
  static create(arg0: { code: string; name: string; emoji: string; continent: string; }) {
    throw new Error("Method not implemented.");
  }
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ length: 50 })
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  continentCode: string;

}