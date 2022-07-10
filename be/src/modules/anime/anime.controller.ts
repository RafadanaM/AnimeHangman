import { NextFunction, Request, Response, Router } from 'express';
import { RequestTypes } from '../../enums/request.enum';
import Controller from '../../interfaces/controller.interface';
import validationMiddleware from '../../middlewares/validation.middleware';
import { AnimeDTO, verifyAnswerDTO } from './anime.dto';
import AnimeService from './anime.service';

class AnimeController implements Controller {
  public path: string = '/anime';
  public router: Router = Router();
  public animeService: AnimeService;

  constructor() {
    this.animeService = new AnimeService();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('', validationMiddleware(AnimeDTO, RequestTypes.QUERY), this.getAnime);
    this.router.get('/detail', validationMiddleware(AnimeDTO, RequestTypes.QUERY), this.getAnimeDetail);
    this.router.patch('/verify', validationMiddleware(verifyAnswerDTO, RequestTypes.BODY), this.verifyAnswerHandler);
  }

  private getAnime = async (
    req: Request<{}, {}, {}, { date: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const queries = req.query;
      const anime = await this.animeService.getAnimeByDate(queries);
      res.send(anime);
    } catch (error) {
      next(error);
    }
  };

  private verifyAnswerHandler = async (
    req: Request<{}, {}, verifyAnswerDTO>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { title, date, tries } = req.body;
      const result = await this.animeService.verifyAnswer(title, date, tries);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };

  private getAnimeDetail = async (
    req: Request<{}, {}, {}, { date: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const queries = req.query;
      const anime = await this.animeService.getAnimeDetailByDate(queries);
      res.send(anime);
    } catch (error) {
      next(error);
    }
  };

  // I HAVE TO USE ARROW FUNCTION NOT NORMAL FUNCTION ?!?!?! Normal function will throw "cannot read properties of undefined (reading animeService)"

  // private async getAnime(req: Request<{}, {}, {}, { date: string }>, res: Response, next: NextFunction): Promise<void> {
  //   try {
  //     // const queries = req.query;

  //     const anime = await this.animeService.getAnimeByDate({ date: '2022-06-26' });
  //     res.send(anime);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}
export default AnimeController;
