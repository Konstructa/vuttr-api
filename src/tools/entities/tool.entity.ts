import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('tools')
class Tool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column('json')
  tags: string[];
}

export { Tool };
