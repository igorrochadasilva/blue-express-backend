import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApproverEntity } from './entity/approver.entity';
import { CreateApproverDTO } from './dto/create-approver.dto';
import { UpdatePutApproverDTO } from './dto/update-put-approver.dto';
import { UpdatePatchApproverDTO } from './dto/update-patch-approver.dto';

@Injectable()
export class ApproverService {
  constructor(
    @InjectRepository(ApproverEntity)
    private approverRepository: Repository<ApproverEntity>,
  ) {}

  async create(data: CreateApproverDTO) {
    const existsApprover = await this.approverRepository.exists({
      where: { level: data.level, key: data.key, user: data.user },
    });

    if (existsApprover) {
      throw new BadRequestException('This approver already exists.');
    }

    const request = await this.approverRepository.save(data);

    return request;
  }

  async list() {
    return this.approverRepository.find();
  }

  async show(id: number) {
    await this.exists(id);

    return this.approverRepository.findOneBy({
      id,
    });
  }

  async update(id: number, data: UpdatePutApproverDTO) {
    await this.exists(id);

    await this.approverRepository.update(id, data);

    return this.show(id);
  }

  async updatePartial(id: number, data: UpdatePatchApproverDTO) {
    await this.exists(id);

    await this.approverRepository.update(id, data);

    return this.show(id);
  }

  async delete(id: number) {
    await this.exists(id);

    await this.approverRepository.delete(id);

    return true;
  }

  async exists(id: number) {
    const user = await this.approverRepository.exists({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User ${id} does't exist.`);
    }
  }
}
