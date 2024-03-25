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
import { ApprovalService } from './approval.service';
import { CreateApprovalDTO } from './dto/create-approval.dto';
import { UpdatePutApprovalDTO } from './dto/update-put-approval.dto';
import { UpdatePatchApprovalDTO } from './dto/update-patch-approval.dto';

//@UseGuards(AuthGuard)
@Controller('approvals')
export class ApprovalController {
  constructor(private readonly approvalService: ApprovalService) {}

  @Post()
  async create(@Body() data: CreateApprovalDTO) {
    return this.approvalService.create(data);
  }

  @Get()
  async list() {
    return this.approvalService.list();
  }

  @Get(':id')
  async show(@ParamId() id: number) {
    return this.approvalService.show(id);
  }

  @Put(':id')
  async update(@Body() data: UpdatePutApprovalDTO, @ParamId() id: number) {
    return this.approvalService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdatePatchApprovalDTO,
    @ParamId() id: number,
  ) {
    return this.approvalService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return { success: await this.approvalService.delete(id) };
  }
}
