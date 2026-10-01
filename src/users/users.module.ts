import { Module } from '@nestjs/common';
import { UserService } from './users.service.js';

@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
