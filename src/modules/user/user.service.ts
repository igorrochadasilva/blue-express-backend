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
    const existsUser = await this.usersRepository.exists({
      where: { email: data.email },
    });

    if (existsUser) {
      throw new BadRequestException('This e-mail already exists');
    }

    const user = await this.usersRepository.save(data);

    return {
      message: 'Created user',
      user,
    };
  }

  async list() {
    return this.usersRepository.find();
  }

  async show(id: number) {
    await this.exists(id);

    return this.usersRepository.findOneBy({
      id,
    });
  }

  async update(
    id: number,
    {
      birthAt,
      name,
      password,
      department,
      position,
      email,
      role,
    }: UpdatePutUserDTO,
  ) {
    await this.exists(id);

    await this.usersRepository.update(id, {
      name,
      password,
      department,
      position,
      email,
      birthAt: birthAt ? new Date(birthAt) : null,
      role,
    });

    return this.show(id);
  }

  async updatePartial(
    id: number,
    {
      birthAt,
      name,
      password,
      department,
      position,
      email,
      role,
    }: UpdatePatchUserDTO,
  ) {
    await this.exists(id);

    const data: any = {};

    if (birthAt) {
      data.birthAt = new Date(birthAt);
    }
    if (name) {
      data.name = name;
    }
    if (password) {
      data.password = password;
    }
    if (department) {
      data.department = department;
    }
    if (position) {
      data.position = position;
    }
    if (email) {
      data.email = email;
    }

    if (role) {
      data.role = role;
    }

    await this.usersRepository.update(id, data);

    return this.show(id);
  }

  async delete(id: number) {
    await this.exists(id);

    await this.usersRepository.delete(id);

    return true;
  }

  async exists(id: number) {
    const user = await this.usersRepository.exists({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User ${id} does't exist.`);
    }
  }
}
