import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { lookup } from 'mime-types';

@Injectable()
export class MinioService {
  private s3 = new S3Client({
    region: 'us-east-1',
    endpoint: 'https://fiestapp-s3-console.mizury.fr', // MinIO endpoint
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.MINIO_ACCESS_KEY ?? '',
      secretAccessKey: process.env.MINIO_SECRET_KEY ?? '',
    },
  });

  private bucketName = 'fiestapp';

  async uploadEventImage(buffer: Buffer, filename: string, guid: string) {
    const key = `event/${guid}.webp`;

    await this.s3.send(
      new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        Body: buffer,
        ContentType: this.getMimeType(filename),
      }),
    );

    return `${this.bucketName}/${key}`;
  }

  async uploadUserAvatar(
    fileBuffer: Buffer,
    originalName: string,
    userGuid: string,
  ): Promise<string> {
    const key = `user/${userGuid}.webp`; // always overwrite same key

    await this.s3.send(
      new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        Body: fileBuffer,
        ContentType: this.getMimeType(originalName),
      }),
    );

    return `${this.bucketName}/${key}`;
  }

  private getMimeType(extension: string): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return lookup(extension) || 'application/octet-stream';
  }
}
