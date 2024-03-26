import {
  IsDateString,
  IsDecimal,
  IsDefined,
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
import { OfficeTypeEnum } from '../../../enums/approver-level.enum';
import { TypeContractEnums } from '../../../enums/type-contract.enum';
import { CompaniesEnums } from '../../../enums/companies.enum';
import { RequestStatusEnums } from '../../../enums/request-status.enum';
import { RequestFrequencyEnums } from '../../../enums/request-frequency.enum';
import { ApproverEntity } from '../../approver/entity/approver.entity';

export class CreateMaintenanceContractDTO {
  @IsString()
  title: string;
  @IsString()
  clientName: string;
  @IsString()
  clmHeaderNumber: string;
  @IsString()
  @IsOptional()
  clmLineNumber: string;
  @IsEnum(TypeContractEnums)
  typeContract: TypeContractEnums;
  @IsEnum(CompaniesEnums)
  company: CompaniesEnums;
  @IsEnum(RequestStatusEnums)
  status: RequestStatusEnums;
  @IsDateString()
  renewStartDate: string;
  @IsDateString()
  renewEndDate: string;
  @IsNumber()
  contractRenewQtd: number;
  @IsEnum(RequestFrequencyEnums)
  frequency: RequestFrequencyEnums;
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
  @IsDefined()
  requester: UserEntity;
  @IsDefined()
  currentApprover: ApproverEntity;
  @IsNumber()
  currentLevel: number;
  @IsEnum(OfficeTypeEnum)
  approvalLevel: OfficeTypeEnum;
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
