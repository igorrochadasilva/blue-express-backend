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
import { TypeRepresentativeDistributorEnum } from '../../../enums/request-representative-distributor.enum';
import { UserEntity } from '../../user/entity/user.entity';
import { ApproverEntity } from '../../approver/entity/approver.entity';

export class CreateDistributorRepresentativesContractDTO {
  @IsString()
  title: string;

  @IsEnum(TypeRepresentativeDistributorEnum)
  typeRepresentativeDistributor: TypeRepresentativeDistributorEnum;

  @IsString()
  nameRepresentativeDistributor: string;

  @IsEnum(CompaniesEnums)
  company: CompaniesEnums;

  @IsEmail()
  @IsOptional()
  contact: string;

  @IsString()
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
  startContractDate: string;

  @IsDateString()
  endContractDate: string;

  @IsNumber()
  commissionPercentage: number;

  @IsString()
  manager: string;

  @IsString()
  uf: string;

  @IsString()
  observation: string;

  @IsString()
  activity: string;

  @IsString()
  antiCorruption: string;

  @IsEnum(TypeContractEnums)
  typeContract: TypeContractEnums;

  @IsString()
  requestId: string;

  @IsNumber()
  currentLevel: number;

  @IsEnum(RequestStatusEnums)
  status: RequestStatusEnums;

  @IsDateString()
  approvalDate: string;

  @IsEnum(OfficeTypeEnum)
  approvalLevel: OfficeTypeEnum;

  @IsDefined()
  requester: UserEntity;

  @IsDefined()
  currentApprover: ApproverEntity;
}
