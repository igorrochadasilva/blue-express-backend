import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ApprovalEntity } from './entity/approval.entity';
import { ApprovalController } from './approval.controller';
import { ApprovalService } from './approval.service';
import { ApproverEntity } from '../approver/entity/approver.entity';
import { ApproverModule } from '../approver/approver.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => ApproverModule),
    TypeOrmModule.forFeature([ApproverEntity]),
    TypeOrmModule.forFeature([ApprovalEntity]),
  ],
  controllers: [ApprovalController],
  providers: [ApprovalService],
  exports: [ApprovalService],
})
export class ApprovalModule {}
