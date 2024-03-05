import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDTO) {
    return { message: 'Create' };
  }

  async list() {
    return { message: 'list' };
  }

  async show(id: number) {
    return { message: 'show' };
  }

  async update(
    id: number,
    { birthAt, name, password, email, role }: UpdatePutUserDTO,
  ) {
    return { message: 'update' };
  }

  async updatePartial(
    id: number,
    { birthAt, name, password, email, role }: UpdatePatchUserDTO,
  ) {
    return { message: 'updatePartial' };
  }

  async delete(id: number) {
    return { message: 'delete' };
  }
}
