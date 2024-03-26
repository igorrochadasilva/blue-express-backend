import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { DistributorRepresentativesContractEntity } from './entity/distributor-representatives-contract.entity';
import { DistributorRepresentativesContractController } from './distributor-representatives-contract.controller';
import { DistributorRepresentativesContractService } from './distributor-representatives-contract.service';
import { UserModule } from '../user/user.module';
import { UserEntity } from '../user/entity/user.entity';
import { ApproverModule } from '../approver/approver.module';
import { ApproverEntity } from '../approver/entity/approver.entity';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
    forwardRef(() => ApproverModule),
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([ApproverEntity]),
    TypeOrmModule.forFeature([DistributorRepresentativesContractEntity]),
  ],
  controllers: [DistributorRepresentativesContractController],
  providers: [DistributorRepresentativesContractService],
  exports: [DistributorRepresentativesContractService],
})
export class DistributorRepresentativesContractModule {}
