import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { MaintenanceContractEntity } from './entity/maintenance-contract.entity';
import { MaintenanceContractController } from './maintenance-contract.controller';
import { MaintenanceContractService } from './maintenance-contract.service';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([MaintenanceContractEntity]),
  ],
  controllers: [MaintenanceContractController],
  providers: [MaintenanceContractService],
  exports: [MaintenanceContractService],
})
export class MaintenanceContractModule {}
