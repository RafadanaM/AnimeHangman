import { NextFunction, Request, Router, Response } from 'express';
import { RequestTypes } from '../../enums/request.enum';
import Controller from '../../interfaces/controller.interface';
import validationMiddleware from '../../middlewares/validation.middleware';
import { GetStatisticsDTO, ParticipateDTO, WinDTO } from './statistics.dto';
import StatisticsService from './statistics.service';

class StatisticsController implements Controller {
  public path: string = '/statistics';
  public router: Router = Router();
  public statisticsService: StatisticsService;

  constructor() {
    this.statisticsService = new StatisticsService();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('', validationMiddleware(GetStatisticsDTO, RequestTypes.QUERY), this.getStatisticsUntilDateHandler);
    this.router.patch('/win', validationMiddleware(WinDTO, RequestTypes.BODY), this.winHandler);
    this.router.patch('/participate', validationMiddleware(ParticipateDTO, RequestTypes.BODY), this.participateHandler);
  }

  private getStatisticsUntilDateHandler = async (
    req: Request<{}, {}, {}, GetStatisticsDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { date, limit, offset } = req.query;
      const stats = await this.statisticsService.getStatisticsUntilDate(date!, offset!, limit!);
      res.send({ stats });
    } catch (error) {
      next(error);
    }
  };

  private participateHandler = async (req: Request<{}, {}, ParticipateDTO>, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      await this.statisticsService.participate(data.date);
      res.status(201).send({ message: 'participation successfully recorded' });
    } catch (error) {
      next(error);
    }
  };

  private winHandler = async (req: Request<{}, {}, WinDTO>, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      await this.statisticsService.win(data.anime_id, data.tries);
      res.status(201).send({ message: 'win successfully recorded' });
    } catch (error) {
      next(error);
    }
  };
}
export default StatisticsController;
