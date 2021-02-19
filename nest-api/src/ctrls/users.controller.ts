import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CtrlsService } from './users.service';
import { User } from './user.entity';
import { UserClass } from './userClass'

@Controller('ctrls')
export class CtrlsController {
    constructor(private ctrlsService: CtrlsService){

    }

@Get()
async getAll() : Promise<UserClass[]> {
    return this.ctrlsService.getAll();
}

@Get(':id')
async getById(@Param('id') id: number) {
    return this.ctrlsService.getById(id);
}

@Post()
async addUser(@Body() user: UserClass) {
    return this.ctrlsService.addUser(user);
}

@Put(':id')
async editUser(@Param('id') id: number, @Body() user: UserClass) {
    user.id = id;
    return this.ctrlsService.editUser(id, user);
}

@Delete(':id')
async deleteUser(@Param('id') id: number) {
    this.ctrlsService.deleteUser(id);
}
}
