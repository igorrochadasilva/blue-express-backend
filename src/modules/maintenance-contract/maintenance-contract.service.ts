import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaintenanceContractEntity } from './entity/maintenance-contract.entity';
import { CreateMaintenanceContractDTO } from './dto/create-maintenance-contract.dto';
import { UpdatePutMaintenanceContractDTO } from './dto/update-put-maintenance-contract.dto';
import { UpdatePatchMaintenanceContractDTO } from './dto/update-patch-maintenance-contract.dto';
import { UserEntity } from '../user/entity/user.entity';
import { ApproverEntity } from '../approver/entity/approver.entity';

@Injectable()
export class MaintenanceContractService {
  constructor(
    @InjectRepository(MaintenanceContractEntity)
    private maintenanceContractRepository: Repository<MaintenanceContractEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(ApproverEntity)
    private approversRepository: Repository<ApproverEntity>,
  ) {}

  async create(data: CreateMaintenanceContractDTO) {
    const requesterId: any = data.requester.id || data.requester;
    const approverId: any = data.currentApprover.id || data.currentApprover;

    const requester = await this.usersRepository.findOneBy({ id: requesterId });

    const approverExists = await this.approversRepository.exists({
      where: {
        id: approverId,
      },
    });

    if (!requester) {
      throw new BadRequestException('The requester does not exist.');
    }

    if (!approverExists) {
      throw new BadRequestException('The current approver does not exist.');
    }

    data.author = requester.name;

    const request = await this.maintenanceContractRepository.save(data);

    return request;
  }

  async list() {
    return this.maintenanceContractRepository.find();
  }

  async show(id: number) {
    await this.exists(id);

    return this.maintenanceContractRepository.findOneBy({
      id,
    });
  }

  async update(id: number, data: UpdatePutMaintenanceContractDTO) {
    await this.exists(id);

    await this.maintenanceContractRepository.update(id, data);

    return this.show(id);
  }

  async updatePartial(id: number, data: UpdatePatchMaintenanceContractDTO) {
    await this.exists(id);

    await this.maintenanceContractRepository.update(id, data);

    return this.show(id);
  }

  async delete(id: number) {
    await this.exists(id);

    await this.maintenanceContractRepository.delete(id);

    return true;
  }

  async exists(id: number) {
    const user = await this.maintenanceContractRepository.exists({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`Maintenance Contract ${id} does't exist.`);
    }
  }
}
