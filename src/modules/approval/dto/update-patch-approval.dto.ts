import { CreateApprovalDTO } from './create-approval.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchApprovalDTO extends PartialType(CreateApprovalDTO) {}
