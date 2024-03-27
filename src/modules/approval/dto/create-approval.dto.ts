import { IsEnum, IsNumber, IsString } from 'class-validator';
import { UserEntity } from '../../user/entity/user.entity';
import { RequestStatusEnums } from '../../../enums/request-status.enum';
import { RequestsTypeEnums } from '../../../enums/request-types.enum';

export class CreateApprovalDTO {
  @IsString()
  title: string;

  @IsNumber()
  level: number;

  @IsNumber()
  user: UserEntity;

  @IsString()
  idRequest: string;

  @IsEnum(RequestStatusEnums)
  status: RequestStatusEnums;

  @IsString()
  justify: string;

  @IsEnum(RequestsTypeEnums)
  typeRequest: RequestsTypeEnums;

  @IsString()
  author: string;
}
