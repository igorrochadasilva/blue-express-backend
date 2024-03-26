import { CreateSoftwareServiceContractDTO } from './create-software-service-contract.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchSoftwareServiceContractDTO extends PartialType(
  CreateSoftwareServiceContractDTO,
) {}
