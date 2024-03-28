import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Patch,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ParamId } from '../../decorators/param-id-decorator';
import { AuthGuard } from '../../guards/auth.guard';
import { MaintenanceContractService } from './maintenance-contract.service';
import { CreateMaintenanceContractDTO } from './dto/create-maintenance-contract.dto';
import { UpdatePutMaintenanceContractDTO } from './dto/update-put-maintenance-contract.dto';
import { UpdatePatchMaintenanceContractDTO } from './dto/update-patch-maintenance-contract.dto';
import { FileInterceptor } from '@nestjs/platform-express';

//@UseGuards(AuthGuard)
@Controller('request/maintenance-contract')
export class MaintenanceContractController {
  constructor(
    private readonly maintenanceContractServiceService: MaintenanceContractService,
  ) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async create(@Body() data: CreateMaintenanceContractDTO) {
    return this.maintenanceContractServiceService.create(data);
  }

  @Get()
  async list() {
    return this.maintenanceContractServiceService.list();
  }

  @Get(':id')
  async show(@ParamId() id: number) {
    return this.maintenanceContractServiceService.show(id);
  }

  @Put(':id')
  async update(
    @Body() data: UpdatePutMaintenanceContractDTO,
    @ParamId() id: number,
  ) {
    return this.maintenanceContractServiceService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdatePatchMaintenanceContractDTO,
    @ParamId() id: number,
  ) {
    return this.maintenanceContractServiceService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return { success: await this.maintenanceContractServiceService.delete(id) };
  }
}
