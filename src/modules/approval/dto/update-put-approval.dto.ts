import { CreateApprovalDTO } from './create-approval.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePutApprovalDTO extends PartialType(CreateApprovalDTO) {}
