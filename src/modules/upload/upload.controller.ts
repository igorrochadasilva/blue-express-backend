import {
  Body,
  Controller,
  Delete,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { RequestId } from '../../decorators/request-id-decorator';

@Controller('/request/upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async uploadFiles(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 50 })],
      }),
    )
    file: Express.Multer.File,
    @RequestId()
    requestId: string,
  ) {
    return this.uploadService.upload(file.originalname, file.buffer, requestId);
  }

  @Get()
  async getFiles(
    @Query('fileName')
    fileName: string,
    @Query('requestId')
    requestId: string,
  ) {
    return this.uploadService.getUploadedFile(fileName, requestId);
  }

  @Delete()
  async deleteFiles(
    @Query('fileName')
    fileName: string,
    @Query('requestId')
    requestId: string,
  ) {
    return this.uploadService.deleteUploadedFile(fileName, requestId);
  }
}
