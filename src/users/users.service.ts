import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, email: 'admin@gmail.com', password: '1234' },
    { id: 2, email: 'riribadgirl@gmail.com', password: 'diamonds' },
  ];

  findByEmail(email: string) {
    const users = this.users.find((user) => user.email === email);
    if (!users) return undefined;
    return Promise.resolve(users);
  }

}
