import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../user/entity/user.entity';
import { ApproverEntity } from '../approver/entity/approver.entity';
import { SoftwareServiceContractEntity } from './entity/software-service-contract.entity';
import { CreateSoftwareServiceContractDTO } from './dto/create-software-service-contract.dto';
import { UpdatePutSoftwareServiceContractDTO } from './dto/update-put-software-service-contract.dto';
import { UpdatePatchSoftwareServiceContractDTO } from './dto/update-patch-software-service-contract.dto';

@Injectable()
export class SoftwareServiceContractService {
  constructor(
    @InjectRepository(SoftwareServiceContractEntity)
    private softwareServiceContractRepository: Repository<SoftwareServiceContractEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(ApproverEntity)
    private approversRepository: Repository<ApproverEntity>,
  ) {}

  async create(data: CreateSoftwareServiceContractDTO) {
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

    const request = await this.softwareServiceContractRepository.save(data);

    return request;
  }

  async list() {
    return this.softwareServiceContractRepository.find();
  }

  async show(id: number) {
    await this.exists(id);

    return this.softwareServiceContractRepository.findOneBy({
      id,
    });
  }

  async update(id: number, data: UpdatePutSoftwareServiceContractDTO) {
    await this.exists(id);

    await this.softwareServiceContractRepository.update(id, data);

    return this.show(id);
  }

  async updatePartial(id: number, data: UpdatePatchSoftwareServiceContractDTO) {
    await this.exists(id);

    await this.softwareServiceContractRepository.update(id, data);

    return this.show(id);
  }

  async delete(id: number) {
    await this.exists(id);

    await this.softwareServiceContractRepository.delete(id);

    return true;
  }

  async exists(id: number) {
    const user = await this.softwareServiceContractRepository.exists({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(
        `Distributor representatives contract ${id} does't exist.`,
      );
    }
  }
}
