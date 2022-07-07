import { Column, CreateDateColumn, Entity, Index, PrimaryColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import Statistics from '../statistics/statistics.entity';

@Entity()
class Anime {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string | null;

  @Column({ type: 'varchar', nullable: true })
  image: string | null;

  @Column()
  rank: number;

  @Column({ type: 'decimal', nullable: true })
  mean_score: number | null;

  @Column()
  life: number;

  @Column()
  status: string;

  @Column()
  genres: string;

  @Column()
  media_type: string;

  @Column()
  release_year: number;

  @Index({ unique: true })
  @Column({ type: 'date', unique: true })
  date: string;

  @OneToOne(() => Statistics, (statistics) => statistics.anime, { cascade: true })
  statistic: Statistics;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
export default Anime;
