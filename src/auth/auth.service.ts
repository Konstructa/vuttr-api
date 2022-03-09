import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import RefreshToken from './entities/refresh-token.entity';

@Injectable()
export class AuthService {
  private refreshTokens: RefreshToken[] = [];

  constructor(private readonly userService: UsersService) {}

  async login(
    email: string,
    password: string,
    values: { userAgent: string; ipAdress: string },
  ) {
    const user = await this.userService.findByEmail(email);
    if (!user) return undefined;
    //para hash
    if (user.password !== password) return undefined;
  }

  private async newRefreshAndAccessToken(
    user: User,
    values: { userAgent: string; ipAdress: string },
  ) {
    const refreshObject = new RefreshToken({
      id:
        this.refreshTokens.length === 0
          ? 0
          : this.refreshTokens[this.refreshTokens.length - 1].id + 1,
      ...values,
      userId: user.id,
    });
    this.refreshTokens.push(refreshObject);
  }
}
