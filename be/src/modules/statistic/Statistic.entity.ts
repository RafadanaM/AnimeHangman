import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Anime from '../anime/anime.entity';

// I should have recored each win, lose, time, etc and just get the aggregates
// but I'm afraid it will exceed the free tier db row

@Entity()
class Statistic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0, type: "decimal"})
  avg_tries: number

  @Column({ default: 0 })
  win: number;

  @Column({ default: 0})
  participant: number;

  @OneToOne(() => Anime)
  @JoinColumn()
  anime: Anime;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
export default Statistic;
