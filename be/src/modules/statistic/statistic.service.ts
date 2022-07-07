import AppDataSource from '../../data-source';
import Anime from '../anime/anime.entity';
import Statistic from './statistic.entity';

class StatisticService {
  private statisticRepository = AppDataSource.getRepository(Statistic);

  public async getStatisticsUntilDate(date: string, offset: number, limit: number): Promise<Statistic[]> {
    const stats = await this.statisticRepository
      .createQueryBuilder('s')
      .leftJoin('s.anime', 'anime')
      .select([
        's.id',
        's.avg_tries',
        's.win',
        's.participant',
        's.anime_id',
        'anime.date',
        'anime.image',
        'anime.title',
      ])
      .where('anime.date <= :date', { date })
      .orderBy('anime.date', 'DESC')
      .skip(offset)
      .take(limit)
      .getMany();

    return stats;
  }

  public async participate(date: string): Promise<void> {
    await this.statisticRepository
      .createQueryBuilder()
      .where((qb) => {
        const subQuery = qb
          .subQuery()
          .select('a.id')
          .from(Anime, 'a')
          .where('a.date = :dateInput', { dateInput: date })
          .getQuery();
        return 'anime_id = ' + subQuery;
      })
      .update()
      .set({ participant: () => 'participant + 1' })
      // .where('anime.date = :dateInput', { dateInput: date })
      .execute();

    return;
  }
  public async win(anime_id: number, tries: number): Promise<void> {
    await this.statisticRepository
      .createQueryBuilder()
      .update()
      .set({ win: () => 'win + 1', avg_tries: () => `avg_tries + ((${tries} - avg_tries) / (win + 1))` })
      .where('anime_id = :anime_id', { anime_id })
      .execute();
  }
}
export default StatisticService;
