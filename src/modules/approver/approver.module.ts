import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ApproverService } from './approver.service';
import { ApproverEntity } from './entity/approver.entity';
import { ApproverController } from './approver.controller';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([ApproverEntity]),
  ],
  controllers: [ApproverController],
  providers: [ApproverService],
  exports: [ApproverService],
})
export class ApproverModule {}
