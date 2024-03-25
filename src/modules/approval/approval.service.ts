import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApprovalEntity } from './entity/approval.entity';
import { CreateApprovalDTO } from './dto/create-approval.dto';
import { UpdatePutApprovalDTO } from './dto/update-put-approval.dto';
import { UpdatePatchApprovalDTO } from './dto/update-patch-approval.dto';

@Injectable()
export class ApprovalService {
  constructor(
    @InjectRepository(ApprovalEntity)
    private approvalRepository: Repository<ApprovalEntity>,
  ) {}

  async create(data: CreateApprovalDTO) {
    // const existsApprover = await this.approverRepository.exists({
    //   where: { level: data.level, key: data.key, user: data.user },
    // });

    // if (existsApprover) {
    //   throw new BadRequestException('This approver already exists.');
    // }

    const request = await this.approvalRepository.save(data);

    return request;
  }

  async list() {
    return this.approvalRepository.find();
  }

  async show(id: number) {
    await this.exists(id);

    return this.approvalRepository.findOneBy({
      id,
    });
  }

  async update(id: number, data: UpdatePutApprovalDTO) {
    await this.exists(id);

    await this.approvalRepository.update(id, data);

    return this.show(id);
  }

  async updatePartial(id: number, data: UpdatePatchApprovalDTO) {
    await this.exists(id);

    await this.approvalRepository.update(id, data);

    return this.show(id);
  }

  async delete(id: number) {
    await this.exists(id);

    await this.approvalRepository.delete(id);

    return true;
  }

  async exists(id: number) {
    const user = await this.approvalRepository.exists({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`approval ${id} does't exist.`);
    }
  }
}
