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
class Statistics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0, type: 'decimal' })
  avg_tries: number;

  @Column({ default: 0 })
  win: number;

  @Column({ default: 0 })
  participant: number;

  @OneToOne(() => Anime, (anime) => anime.statistic)
  @JoinColumn({ name: 'anime_id' })
  anime: Anime;

  @Column()
  public anime_id: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
export default Statistics;
