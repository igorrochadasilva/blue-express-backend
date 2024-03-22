import {
  IsDateString,
  IsDecimal,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { UserEntity } from '../../user/entity/user.entity';

export class CreateMaintenanceContractDTO {
  @IsString()
  title;
  @IsString()
  clientName: string;
  @IsString()
  clmHeaderNumber: string;
  @IsString()
  @IsOptional()
  clmLineNumber: string;
  @IsString()
  typeContract: string;
  @IsString()
  company: string;
  @IsString()
  status: string;
  @IsDateString()
  renewStartDate: string;
  @IsDateString()
  renewEndDate: string;
  @IsNumber()
  contractRenewQtd: number;
  @IsString()
  frequency: string;
  @IsString()
  scope: string;
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 5,
  })
  contractTotalValue: number;
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 5,
  })
  dollarExchangeRate: number;
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 5,
  })
  totalValueUSD: number;
  @IsNumber()
  gm: number;
  @IsNumber()
  @IsOptional()
  renewIndexPercentage: number;
  @IsNumber()
  @IsOptional()
  index: number;
  @IsString()
  @IsOptional()
  paymentCondition: string;
  @IsString()
  @IsOptional()
  inclusionClauses: string;
  @IsString()
  @IsOptional()
  inclusionDescription: string;
  @IsString()
  @IsOptional()
  legalIndemnificationObligations: string;
  @IsString()
  @IsOptional()
  legalWarrantyObligations: string;
  @IsString()
  @IsOptional()
  legalDamageCap: string;
  @IsString()
  @IsOptional()
  legalDamageCave: string;
  @IsString()
  @IsOptional()
  legalLiquidatedDamages: string;
  @IsString()
  justify: string;
  @IsString()
  requestId: string;
  @IsNumber()
  requester: UserEntity;
  @IsNumber()
  currentLevel: number;
  @IsString()
  approvalLevel: string;
  @IsOptional()
  @IsPhoneNumber()
  phone: string;
  @IsEmail()
  @IsOptional()
  contact: string;
  @IsString()
  @IsOptional()
  antiCorruption: string;
  @IsString()
  @IsOptional()
  uf: string;
  @IsString()
  @IsOptional()
  sap: string;
}
