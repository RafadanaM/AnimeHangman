import express from 'express';
import morgan from 'morgan';
import AppDataSource from './data-source';
import Controller from './interfaces/controller.interface';
import errorMiddleware from './middlewares/error.middleware';
import NotFoundMiddleware from './middlewares/notfound.middleware';
import Anime from './modules/anime/anime.entity';
import jsonfile from 'jsonfile';
import cors from 'cors';
import DataJSON from './interfaces/datajson.interface';

const JSON_FILE_PATH = './src/db/data.json';

class App {
  public app: express.Application;

  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;

    this.initMiddlewares();
    this.initControllers(controllers);
    this.initErrorHandling();
    this.initRouteNotFound();
    this.loadAnimeData();
  }

  private async loadAnimeData() {
    const animeRepository = AppDataSource.getRepository(Anime);
    const count = await animeRepository.count();
    if (count === 0) {
      const file: DataJSON | undefined = await jsonfile.readFile(JSON_FILE_PATH);
      if (file) {
        await animeRepository
          .createQueryBuilder()
          .insert()
          .into(Anime)
          .values([...file.data])
          .execute();
      }
    }
  }

  private initMiddlewares() {
    this.app.use(cors({ origin: process.env.ORIGIN }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'short'));
  }

  private initControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use(`/api${controller.path}`, controller.router);
    });
  }

  private initErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initRouteNotFound() {
    this.app.use(NotFoundMiddleware);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`app is listening on port ${this.port}`);
    });
  }
}

export default App;
