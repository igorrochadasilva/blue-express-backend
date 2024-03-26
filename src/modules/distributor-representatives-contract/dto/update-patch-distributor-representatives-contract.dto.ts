import { CreateDistributorRepresentativesContractDTO } from './create-distributor-representatives-contract.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchDistributorRepresentativesContractDTO extends PartialType(
  CreateDistributorRepresentativesContractDTO,
) {}
