import { DataSource } from 'typeorm';
import 'dotenv/config';
const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
  synchronize: process.env.NODE_ENV === 'production' ? false : true,
  entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/db/migrations/*{.ts,.js}'],
  // migrationsRun
});

export default AppDataSource;
