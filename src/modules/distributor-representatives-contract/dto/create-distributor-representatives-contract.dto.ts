import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { OfficeTypeEnum } from '../../../enums/approver-level.enum';
import { TypeContractEnums } from '../../../enums/type-contract.enum';
import { CompaniesEnums } from '../../../enums/companies.enum';
import { RequestStatusEnums } from '../../../enums/request-status.enum';
import { UserEntity } from '../../user/entity/user.entity';
import { ApproverEntity } from '../../approver/entity/approver.entity';
import { TypeRequestOrderEnum } from '../../../enums/type-request-order.enum';

export class CreateDistributorRepresentativesContractDTO {
  @IsString()
  title: string;

  @IsEnum(TypeRequestOrderEnum)
  typeRepresentativeDistributor: TypeRequestOrderEnum;

  @IsString()
  nameRepresentativeDistributor: string;

  @IsEnum(CompaniesEnums)
  company: CompaniesEnums;

  @IsString()
  @IsOptional()
  contact: string;

  @IsString()
  @IsOptional()
  vendor: string;

  @IsPhoneNumber('BR')
  @IsOptional()
  phone: string;

  @IsString()
  clmHeaderNumber: string;

  @IsString()
  @IsOptional()
  clmLineNumber: string;

  @IsDateString()
  startContractDate: Date;

  @IsDateString()
  endContractDate: Date;

  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 5,
  })
  commissionPercentage: number;

  @IsString()
  @IsOptional()
  manager: string;

  @IsString()
  @IsOptional()
  uf: string;

  @IsString()
  observation: string;

  @IsString()
  @IsOptional()
  activity: string;

  @IsString()
  @IsOptional()
  antiCorruption: string;

  @IsEnum(TypeContractEnums)
  typeContract: TypeContractEnums;

  @IsString()
  requestId: string;

  @IsDefined()
  requester: UserEntity;

  @IsNumber()
  currentLevel: number;

  @IsEnum(RequestStatusEnums)
  status: RequestStatusEnums;

  @IsDateString()
  approvalDate: Date;

  @IsDefined()
  currentApprover: ApproverEntity;

  @IsEnum(OfficeTypeEnum)
  approvalLevel: OfficeTypeEnum;

  @IsString()
  @IsOptional()
  author: string;

  @IsEnum(TypeRequestOrderEnum)
  typeRequestOrder: TypeRequestOrderEnum;
}
