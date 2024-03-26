import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { MaintenanceContractEntity } from './entity/maintenance-contract.entity';
import { MaintenanceContractController } from './maintenance-contract.controller';
import { MaintenanceContractService } from './maintenance-contract.service';
import { UserModule } from '../user/user.module';
import { ApproverModule } from '../approver/approver.module';
import { UserEntity } from '../user/entity/user.entity';
import { ApproverEntity } from '../approver/entity/approver.entity';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
    forwardRef(() => ApproverModule),
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([ApproverEntity]),
    TypeOrmModule.forFeature([MaintenanceContractEntity]),
  ],
  controllers: [MaintenanceContractController],
  providers: [MaintenanceContractService],
  exports: [MaintenanceContractService],
})
export class MaintenanceContractModule {}
