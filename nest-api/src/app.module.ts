import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtrlsModule } from './ctrls/users.module';
import { Connection } from 'typeorm';
import { User } from './ctrls/user.entity';

@Module({
  imports: [CtrlsModule, TypeOrmModule.forRoot(
    {
      "type": "mysql",
      "host": "127.0.0.1",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "api",
      "entities": [User],
      "synchronize": true
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
