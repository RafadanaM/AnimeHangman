import 'dotenv/config';
import App from './app';
import validateEnv from './utils/validateEnv';
import 'reflect-metadata';
import AppDataSource from './data-source';
import AnimeController from './modules/anime/anime.controller';
import StatisticController from './modules/statistic/statistic.controller';
validateEnv();

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log(process.env.NODE_ENV);
    const app = new App([new AnimeController(), new StatisticController()], parseInt(process.env.PORT || '5000'));
    app.listen();
  })
  .catch((error) => console.log(error));
