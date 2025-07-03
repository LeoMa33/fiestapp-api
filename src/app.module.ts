import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Domain modules
import { UserModule } from './modules/user/user.module';
import { EventModule } from './modules/event/event.module';
import { CourseModule } from './modules/course/course.module';
import { HostingModule } from './modules/hosting/hosting.module';
import { ShoppingModule } from './modules/shopping/shopping.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { PollModule } from './modules/poll/poll.module';
import { MinioModule } from './shared/services/minio.module';
import { DeviceAuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // permet d'accéder à ConfigService sans le re-importer partout
      envFilePath: '.env', // adapte si tu utilises un autre fichier (.env.local, etc.)
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // ou mysql/sqlite...
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'app_db',
      entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
      synchronize: true, // désactiver en prod
    }),

    // Domain modules
    UserModule,
    EventModule,
    CourseModule,
    HostingModule,
    ShoppingModule,
    ExpenseModule,
    PollModule,
    MinioModule,
    DeviceAuthModule,
  ],
})
export class AppModule {}
