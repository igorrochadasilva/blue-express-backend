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
import { DistributorRepresentativesContractModule } from './modules/distributor-representatives-contract/distributor-representatives-contract.module';
import { SoftwareServiceContractModule } from './modules/software-service-contract/software-service-contract.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from './email/mailer-source';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.ENV === 'test' ? '.env.test' : '.env',
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 1000,
        limit: 1,
      },
    ]),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
    forwardRef(() => ApproverModule),
    forwardRef(() => MaintenanceContractModule),
    forwardRef(() => DistributorRepresentativesContractModule),
    forwardRef(() => SoftwareServiceContractModule),
    forwardRef(() => ApprovalModule),
    MailerModule.forRoot(mailerConfig),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
