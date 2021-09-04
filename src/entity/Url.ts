import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("urls")
class Url {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  url_short: string;

  @Column()
  view_count: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Url };
