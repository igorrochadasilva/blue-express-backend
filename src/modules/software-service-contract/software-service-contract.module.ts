import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ApproverModule } from '../approver/approver.module';
import { UserEntity } from '../user/entity/user.entity';
import { ApproverEntity } from '../approver/entity/approver.entity';
import { SoftwareServiceContractEntity } from './entity/software-service-contract.entity';
import { SoftwareServiceContractController } from './software-service-contract.controller';
import { SoftwareServiceContractService } from './software-service-contract.service';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
    forwardRef(() => ApproverModule),
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([ApproverEntity]),
    TypeOrmModule.forFeature([SoftwareServiceContractEntity]),
  ],
  controllers: [SoftwareServiceContractController],
  providers: [SoftwareServiceContractService],
  exports: [SoftwareServiceContractService],
})
export class SoftwareServiceContractModule {}
