import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserEntity } from '../../user/entity/user.entity';
import { TypeContractEnums } from '../../../enums/type-contract.enum';
import { CompanyTypeEnums } from '../../../enums/CompanyTypeEnums.enum';
import { CompaniesEnums } from '../../../enums/companies.enum';
import { ApproverEntity } from '../../approver/entity/approver.entity';
import { OfficeTypeEnum } from '../../../enums/approver-level.enum';
import { RequestStatusEnums } from '../../../enums/request-status.enum';

export class CreateSoftwareServiceContractDTO {
  @IsString()
  title: string;

  @IsDefined()
  requester: UserEntity;

  @IsString()
  clientName: string;

  @IsString()
  clmHeaderNumber: string;

  @IsString()
  @IsOptional()
  clmLineNumber: string;

  @IsEnum(TypeContractEnums)
  typeContract: TypeContractEnums;

  @IsEnum(CompanyTypeEnums)
  companyType: CompanyTypeEnums;

  @IsEnum(CompaniesEnums)
  company: CompaniesEnums;

  @IsDateString()
  renewStartDate: Date;

  @IsDateString()
  renewEndDate: Date;

  @IsEnum(RequestStatusEnums)
  status: RequestStatusEnums;

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

  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 5,
  })
  gm: number;

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
  currentLevel: number;

  @IsDefined()
  currentApprover: ApproverEntity;

  @IsEnum(OfficeTypeEnum)
  approvalLevel: OfficeTypeEnum;

  @IsString()
  @IsOptional()
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

  @IsString()
  @IsOptional()
  author: string;
}
