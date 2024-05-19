import { Injectable } from '@nestjs/common';
import  { prisma } from './prisma.config';
import { env } from 'process';
import { promiseHooks } from 'v8';

@Injectable()
export class AppService {
   async getHello(){
    const users = await this.usuarios()
    return users;
  }
  async usuarios(){
    const users = await prisma.usuarios.create({
        data: {
          name: 'Rich',
          email: 'hello@prisma.com',
          password: 'teste'
        },
      })
      
    return users
}
}
