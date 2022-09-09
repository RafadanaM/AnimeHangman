import AppDataSource from '../../data-source';
import NotFoundException from '../../exceptions/NotFoundException';
import StatisticsService from '../statistics/statistics.service';
import { AnimeDTO } from './anime.dto';
import Anime from './anime.entity';

class AnimeService {
  private animeRepository = AppDataSource.getRepository(Anime);
  private staticsService = new StatisticsService();

  public async getAnimeByDate(data: AnimeDTO): Promise<Anime> {
    const date = data.date;
    const anime = await this.animeRepository
      .createQueryBuilder('anime')
      .select(['anime.date', 'anime.title', 'anime.life', 'anime.genres', 'anime.release_year', 'anime.media_type'])
      .where('anime.date = :date', { date })
      .getOne();
    if (!anime) {
      throw new NotFoundException(`Cannot find anime with date of ${date}`);
    }
    return anime;
  }

  public async verifyAnswer(title: string, date: string, tries: number) {
    const anime = await this.animeRepository
      .createQueryBuilder('anime')
      .select([
        'anime.id',
        'anime.title',
        'anime.description',
        'anime.status',
        'anime.image',
        'anime.rank',
        'anime.mean_score',
      ])
      .where('anime.date = :date', { date })
      .getOne();
    if (!anime) throw new NotFoundException(`Cannot find anime with date of ${date}`);
    let isCorrect = false;
    if (title === anime.title.toUpperCase()) {
      await this.staticsService.win(anime.id, tries);
      isCorrect = true;
    }

    return { isCorrect };
  }

  public async getAnimeDetailByDate(data: AnimeDTO): Promise<Anime> {
    const date = data.date;
    const anime = await this.animeRepository
      .createQueryBuilder('anime')
      .select(['anime.id', 'anime.description', 'anime.status', 'anime.image', 'anime.rank', 'anime.mean_score'])
      .where('anime.date = :date', { date })
      .getOne();
    if (!anime) {
      throw new NotFoundException(`Cannot find anime with date of ${date}`);
    }
    return anime;
  }
}

export default AnimeService;
