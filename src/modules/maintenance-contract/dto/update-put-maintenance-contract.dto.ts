import { CreateMaintenanceContractDTO } from './create-maintenance-contract.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePutMaintenanceContractDTO extends PartialType(
  CreateMaintenanceContractDTO,
) {}
