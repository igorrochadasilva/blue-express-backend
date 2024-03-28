import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadService {
  private readonly s3Client = new S3Client({
    region: this.configService.getOrThrow('AWS_S3_REGION'),
  });

  constructor(private readonly configService: ConfigService) {}

  async upload(fileName: string, file: Buffer, requestId: string) {
    if (!requestId) {
      throw new BadRequestException(
        'requestId should not be null or undefined.',
      );
    }

    const uniqueFilename = `${requestId}-${fileName}`;

    try {
      await this.s3Client.send(
        new PutObjectCommand({
          Bucket: 'blue-express',
          Key: uniqueFilename,
          Body: file,
        }),
      );

      return { message: `${uniqueFilename} file saved successfully` };
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async getUploadedFile(fileName: string, requestId: string) {
    if (!requestId) {
      throw new BadRequestException(
        'requestId should not be null or undefined.',
      );
    }

    const existsExtension = await this.hasValidExtension(fileName);

    if (!existsExtension) {
      throw new BadRequestException(
        'fileName should not be without extension, ex: .jpg, .png.',
      );
    }

    const uniqueFilename = `${requestId}-${fileName}`;

    try {
      const file = await this.s3Client.send(
        new GetObjectCommand({
          Bucket: 'blue-express',
          Key: uniqueFilename,
        }),
      );

      const stringFile = await file.Body.transformToString();

      return stringFile;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async deleteUploadedFile(fileName: string, requestId: string) {
    if (!requestId) {
      throw new BadRequestException(
        'requestId should not be null or undefined.',
      );
    }

    const existsExtension = await this.hasValidExtension(fileName);

    if (!existsExtension) {
      throw new BadRequestException(
        'fileName should not be without extension, ex: .jpg, .png.',
      );
    }

    const uniqueFilename = `${requestId}-${fileName}`;

    try {
      await this.s3Client.send(
        new DeleteObjectCommand({
          Bucket: 'blue-express',
          Key: uniqueFilename,
        }),
      );

      return { message: `${uniqueFilename} file deleted successfully` };
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async hasValidExtension(fileName: string) {
    const validExtensions = /\.(jpg|jpeg|png|gif|pdf|xlsx?)$/i;
    return validExtensions.test(fileName);
  }
}
