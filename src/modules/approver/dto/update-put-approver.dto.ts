import { CreateApproverDTO } from './create-approver.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePutApproverDTO extends PartialType(CreateApproverDTO) {}
