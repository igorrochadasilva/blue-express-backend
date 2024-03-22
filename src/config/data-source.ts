import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { UserEntity } from '../modules/user/entity/user.entity';
import { ApproverEntity } from '../modules/approvers/entity/approvers.entity';
import { MaintenanceContractEntity } from '../modules/maintenance-contract/entity/maintenance-contract.entity';

dotenv.config({
  path: process.env.ENV === 'test' ? '.env.test' : '.env',
});

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [UserEntity, ApproverEntity, MaintenanceContractEntity],
  synchronize: true,
  autoLoadEntities: true,
};
