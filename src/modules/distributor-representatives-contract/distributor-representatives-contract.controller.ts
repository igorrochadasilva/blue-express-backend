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
import { DistributorRepresentativesContractService } from './distributor-representatives-contract.service';
import { CreateDistributorRepresentativesContractDTO } from './dto/create-distributor-representatives-contract.dto';
import { UpdatePutDistributorRepresentativesContractDTO } from './dto/update-put-distributor-representatives-contract.dto';
import { UpdatePatchDistributorRepresentativesContractDTO } from './dto/update-patch-distributor-representatives-contract.dto';

//@UseGuards(AuthGuard)
@Controller('request/distributor-representatives-contract')
export class DistributorRepresentativesContractController {
  constructor(
    private readonly distributorRepresentativesContractService: DistributorRepresentativesContractService,
  ) {}

  @Post()
  async create(@Body() data: CreateDistributorRepresentativesContractDTO) {
    return this.distributorRepresentativesContractService.create(data);
  }

  @Get()
  async list() {
    return this.distributorRepresentativesContractService.list();
  }

  @Get(':id')
  async show(@ParamId() id: number) {
    return this.distributorRepresentativesContractService.show(id);
  }

  @Put(':id')
  async update(
    @Body() data: UpdatePutDistributorRepresentativesContractDTO,
    @ParamId() id: number,
  ) {
    return this.distributorRepresentativesContractService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdatePatchDistributorRepresentativesContractDTO,
    @ParamId() id: number,
  ) {
    return this.distributorRepresentativesContractService.updatePartial(
      id,
      data,
    );
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return {
      success: await this.distributorRepresentativesContractService.delete(id),
    };
  }
}
