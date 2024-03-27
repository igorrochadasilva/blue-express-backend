import { IsDefined, IsEnum, IsNumber, IsString } from 'class-validator';
import { UserEntity } from '../../user/entity/user.entity';
import { RequestsTypeAcronymEnums } from '../../../enums/request-types-acronym.enum';
import { CompaniesEnums } from '../../../enums/companies.enum';
import { OfficeTypeEnum } from '../../../enums/approver-level.enum';

export class CreateApproverDTO {
  @IsString()
  title: string;
  @IsDefined()
  user: UserEntity;
  @IsNumber()
  level: number;
  @IsEnum(RequestsTypeAcronymEnums)
  key: RequestsTypeAcronymEnums;
  @IsEnum(CompaniesEnums)
  company: CompaniesEnums;
  @IsEnum(OfficeTypeEnum)
  office: OfficeTypeEnum;
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 5,
  })
  competence: number;
}
