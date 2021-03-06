import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import RefreshToken from './entities/refresh-token.entity';

@Injectable()
export class AuthService {
  private refreshTokens: RefreshToken[] = [];

  constructor(private readonly userService: UsersService) {}

  async refresh(refreshStr: string) {
    const refreshToken = await this.retrieveRefreshToke(refreshStr);

    if (!refreshToken) return undefined;

    const user = await this.userService.findOne(refreshToken.userId);

    if (!user) return undefined;

    const acessToken = {
      userId: refreshToken.userId,
    };

    return sign(acessToken, process.env.JWT_SECRET, { expiresIn: '1h' });
  }

  private retrieveRefreshToke(refreshStr: string) {
    try {
      const decoded = verify(refreshStr, process.env.REFRESH_SECRET);

      if (typeof decoded === 'string') return undefined;

      return Promise.resolve(
        this.refreshTokens.find((token) => token.id === decoded.id),
      );
    } catch {
      return undefined;
    }
  }

  async login(
    email: string,
    password: string,
    values: { userAgent: string; ipAdress: string },
  ) {
    const user = await this.userService.findByEmail(email);

    if (!user) return undefined;
    //para hash
    if (user.password !== password) return undefined;

    return this.newRefreshAndAccessToken(user, values);
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

    return {
      refreshToken: refreshObject.sign(),
      acessToken: sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      }),
    };
  }

  async logout(refreshStr) {
    const refreshToken = await this.retrieveRefreshToke(refreshStr);

    if (!refreshToken) return;

    this.refreshTokens = this.refreshTokens.filter(
      (refreshToken) => refreshToken.id !== refreshToken.id,
    );
  }
}
