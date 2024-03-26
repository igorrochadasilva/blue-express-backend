import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DistributorRepresentativesContractEntity } from './entity/distributor-representatives-contract.entity';
import { CreateDistributorRepresentativesContractDTO } from './dto/create-distributor-representatives-contract.dto';
import { UpdatePutDistributorRepresentativesContractDTO } from './dto/update-put-distributor-representatives-contract.dto';
import { UpdatePatchDistributorRepresentativesContractDTO } from './dto/update-patch-distributor-representatives-contract.dto';
import { UserEntity } from '../user/entity/user.entity';
import { ApproverEntity } from '../approver/entity/approver.entity';

@Injectable()
export class DistributorRepresentativesContractService {
  constructor(
    @InjectRepository(DistributorRepresentativesContractEntity)
    private distributorRepresentativesContractRepository: Repository<DistributorRepresentativesContractEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(ApproverEntity)
    private approversRepository: Repository<ApproverEntity>,
  ) {}

  async create(data: CreateDistributorRepresentativesContractDTO) {
    const requesterId: any = data.requester.id || data.requester;
    const approverId: any = data.currentApprover.id || data.currentApprover;

    const requesterExists = await this.usersRepository.exists({
      where: {
        id: requesterId,
      },
    });

    const approverExists = await this.approversRepository.exists({
      where: {
        id: approverId,
      },
    });

    if (!requesterExists) {
      throw new BadRequestException('The requester does not exist.');
    }

    if (!approverExists) {
      throw new BadRequestException('The current approver does not exist.');
    }

    const request =
      await this.distributorRepresentativesContractRepository.save(data);

    return request;
  }

  async list() {
    return this.distributorRepresentativesContractRepository.find();
  }

  async show(id: number) {
    await this.exists(id);

    return this.distributorRepresentativesContractRepository.findOneBy({
      id,
    });
  }

  async update(
    id: number,
    data: UpdatePutDistributorRepresentativesContractDTO,
  ) {
    await this.exists(id);

    await this.distributorRepresentativesContractRepository.update(id, data);

    return this.show(id);
  }

  async updatePartial(
    id: number,
    data: UpdatePatchDistributorRepresentativesContractDTO,
  ) {
    await this.exists(id);

    await this.distributorRepresentativesContractRepository.update(id, data);

    return this.show(id);
  }

  async delete(id: number) {
    await this.exists(id);

    await this.distributorRepresentativesContractRepository.delete(id);

    return true;
  }

  async exists(id: number) {
    const user = await this.distributorRepresentativesContractRepository.exists(
      {
        where: { id },
      },
    );

    if (!user) {
      throw new NotFoundException(
        `Distributor representatives contract ${id} does't exist.`,
      );
    }
  }
}
