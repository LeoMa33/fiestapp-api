// application/device-auth.service.ts
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from '../domain/device.entity';
import { User } from '../../user/domain/user.entity';
import { CreateUserDto } from '../../user/interface/rest/dto/create-user.dto';
import { UserService } from '../../user/application/user.service';
import { MinioService } from '../../../shared/services/minio.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepo: Repository<Device>,
    private readonly userService: UserService,
    private readonly minioService: MinioService,
  ) {}

  async login(deviceId: string): Promise<User> {
    // Recherche du device
    const existingDevice = await this.deviceRepo.findOneOrFail({
      where: { deviceId },
      relations: ['user'],
    });

    return existingDevice.user;
  }

  async register(
    deviceId: string,
    dto: CreateUserDto,
    file?: Express.Multer.File,
  ): Promise<User> {
    const existingDevice = await this.deviceRepo.findOne({
      where: { deviceId },
    });
    if (existingDevice) {
      throw new ConflictException('This device is already registered.');
    }

    const user = await this.userService.create(dto);

    if (file) {
      await this.minioService.uploadUserAvatar(
        file.buffer,
        file.originalname,
        user.guid,
      );
    }

    const device = this.deviceRepo.create({ deviceId, user });
    await this.deviceRepo.save(device);

    return user;
  }
}
