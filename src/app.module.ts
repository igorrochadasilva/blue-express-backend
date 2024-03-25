import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { typeOrmConfig } from './config/data-source';
import { MaintenanceContractModule } from './modules/maintenance-contract/maintenance-contract.module';
import { ApproverModule } from './modules/approver/approver.module';
import { ApprovalModule } from './modules/approval/approval.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.ENV === 'test' ? '.env.test' : '.env',
    }),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
    forwardRef(() => MaintenanceContractModule),
    forwardRef(() => ApproverModule),
    forwardRef(() => ApprovalModule),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
