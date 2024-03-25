import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ParamId } from '../../decorators/param-id-decorator';
import { CreateApproverDTO } from './dto/create-approver.dto';
import { UpdatePutApproverDTO } from './dto/update-put-approver.dto';
import { UpdatePatchApproverDTO } from './dto/update-patch-approver.dto';
import { ApproverService } from './approver.service';

//@UseGuards(AuthGuard)
@Controller('approvers')
export class ApproverController {
  constructor(private readonly approverService: ApproverService) {}

  @Post()
  async create(@Body() data: CreateApproverDTO) {
    return this.approverService.create(data);
  }

  @Get()
  async list() {
    return this.approverService.list();
  }

  @Get(':id')
  async show(@ParamId() id: number) {
    return this.approverService.show(id);
  }

  @Put(':id')
  async update(@Body() data: UpdatePutApproverDTO, @ParamId() id: number) {
    return this.approverService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdatePatchApproverDTO,
    @ParamId() id: number,
  ) {
    return this.approverService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return { success: await this.approverService.delete(id) };
  }
}
