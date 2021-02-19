import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserClass } from './userClass';

@Injectable()
export class CtrlsService {

    constructor (@InjectRepository(User) private usersRepository: Repository<User>) {}

async getAll(){
    return await this.usersRepository.find();
}

async getById(id: number){
    return await this.usersRepository.find({
        select: ["name", "email", "created"],
        where: [{ "id": id }]
    });
}

async addUser(user: UserClass){
    await this.usersRepository.save(user);
}

async editUser(id: number, user: UserClass){
    await this.usersRepository.update({id: id}, user);
    return this.getById(id);
}

async deleteUser(id: number){
    return await this.usersRepository.delete({id: id});
}
}
