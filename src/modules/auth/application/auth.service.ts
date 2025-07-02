// application/device-auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from '../domain/device.entity';
import { User } from '../../user/domain/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Device)
    private readonly deviceRepo: Repository<Device>,
  ) {}

  async loginOrRegister(deviceId: string): Promise<User> {
    // Recherche du device
    const existingDevice = await this.deviceRepo.findOne({
      where: { deviceId },
      relations: ['user'],
    });

    if (existingDevice) {
      return existingDevice.user;
    }

    const user = this.userRepo.create();
    await this.userRepo.save(user);

    const device = this.deviceRepo.create({ deviceId, user });
    await this.deviceRepo.save(device);

    return user;
  }
}
