import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { UserEntity } from '../modules/user/entity/user.entity';
import { ApproverEntity } from '../modules/approver/entity/approver.entity';
import { MaintenanceContractEntity } from '../modules/maintenance-contract/entity/maintenance-contract.entity';
import { ApprovalEntity } from '../modules/approval/entity/approval.entity';
import { DistributorRepresentativesContractEntity } from '../modules/distributor-representatives-contract/entity/distributor-representatives-contract.entity';

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
  entities: [
    UserEntity,
    ApproverEntity,
    MaintenanceContractEntity,
    DistributorRepresentativesContractEntity,
    ApprovalEntity,
  ],
  synchronize: true,
  autoLoadEntities: true,
};
