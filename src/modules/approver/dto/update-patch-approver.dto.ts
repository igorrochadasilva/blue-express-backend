import { CreateApproverDTO } from './create-approver.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchApproverDTO extends PartialType(CreateApproverDTO) {}
