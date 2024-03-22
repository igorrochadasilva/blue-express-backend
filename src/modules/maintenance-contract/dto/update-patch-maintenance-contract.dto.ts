import { CreateMaintenanceContractDTO } from './create-maintenance-contract.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchMaintenanceContractDTO extends PartialType(
  CreateMaintenanceContractDTO,
) {}
