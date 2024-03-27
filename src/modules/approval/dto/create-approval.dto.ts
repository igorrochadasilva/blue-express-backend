import {
  IsDefined,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserEntity } from '../../user/entity/user.entity';
import { RequestStatusEnums } from '../../../enums/request-status.enum';
import { RequestsTypeEnums } from '../../../enums/request-types.enum';

export class CreateApprovalDTO {
  @IsString()
  title: string;

  @IsNumber()
  level: number;

  @IsDefined()
  user: UserEntity;

  @IsString()
  idRequest: string;

  @IsEnum(RequestStatusEnums)
  status: RequestStatusEnums;

  @IsString()
  justify: string;

  @IsEnum(RequestsTypeEnums)
  typeRequest: RequestsTypeEnums;

  @IsOptional()
  author: string;
}
