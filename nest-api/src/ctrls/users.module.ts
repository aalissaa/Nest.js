import { Module } from '@nestjs/common';
import { CtrlsController } from './users.controller';
import { CtrlsService } from './users.service';
import { User } from './user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [CtrlsController],
    providers: [CtrlsService]
})
export class CtrlsModule {}
