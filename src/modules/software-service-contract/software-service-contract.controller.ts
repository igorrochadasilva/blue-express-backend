import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ParamId } from '../../decorators/param-id-decorator';
import { SoftwareServiceContractService } from './software-service-contract.service';
import { CreateSoftwareServiceContractDTO } from './dto/create-software-service-contract.dto';
import { UpdatePutSoftwareServiceContractDTO } from './dto/update-put-software-service-contract.dto';
import { UpdatePatchSoftwareServiceContractDTO } from './dto/update-patch-software-service-contract.dto';

//@UseGuards(AuthGuard)
@Controller('request/software-service-contract')
export class SoftwareServiceContractController {
  constructor(
    private readonly softwareServiceContractService: SoftwareServiceContractService,
  ) {}

  @Post()
  async create(@Body() data: CreateSoftwareServiceContractDTO) {
    return this.softwareServiceContractService.create(data);
  }

  @Get()
  async list() {
    return this.softwareServiceContractService.list();
  }

  @Get(':id')
  async show(@ParamId() id: number) {
    return this.softwareServiceContractService.show(id);
  }

  @Put(':id')
  async update(
    @Body() data: UpdatePutSoftwareServiceContractDTO,
    @ParamId() id: number,
  ) {
    return this.softwareServiceContractService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdatePatchSoftwareServiceContractDTO,
    @ParamId() id: number,
  ) {
    return this.softwareServiceContractService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return {
      success: await this.softwareServiceContractService.delete(id),
    };
  }
}
