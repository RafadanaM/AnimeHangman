import 'dotenv/config';
import App from './app';
import validateEnv from './utils/validateEnv';
import 'reflect-metadata';
import AppDataSource from './data-source';
import AnimeController from './modules/anime/anime.controller';
validateEnv();

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log(process.env.NODE_ENV);
    const app = new App([new AnimeController()], parseInt(process.env.PORT || '5000'));
    app.listen();
  })
  .catch((error) => console.log(error));
// async () => {
//   try {
//     console.log('eyy');

//     await AppDataSource.initialize();
//     const app = new App([new UsersController()], parseInt(process.env.port || '5000'));

//     app.listen();
//   } catch (error) {
//     console.log('Error connecting to the database', error);
//     return error;
//   }

// const app = new App([new UsersController()], parseInt(process.env.port || '5000'));

// app.listen();
// };
