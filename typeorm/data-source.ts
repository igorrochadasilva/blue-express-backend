import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({
  path: process.env.ENV === 'test' ? '.env.test' : '.env',
});

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrations: [`${__dirname}/migrations/**/*.ts`],
  synchronize: true,
  logging: true,
  subscribers: [],
});

export default AppDataSource;
