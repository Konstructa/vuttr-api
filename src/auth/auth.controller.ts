import {
  Body,
  Controller,
  Delete,
  Ip,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 400,
    description: 'Retorna os erros pelo class-validator',
  })
  @ApiResponse({
    status: 401,
    description: 'Erro de senha ou email',
  })
  async login(@Req() request, @Ip() ip: string, @Body() body: LoginDto) {
    try {
      const tokenAndRefreshToken = await this.authService.login(
        body.email,
        body.password,
        {
          ipAdress: ip,
          userAgent: request.headers['user-agent'],
        },
      );

      if (!tokenAndRefreshToken)
        throw new UnauthorizedException('Erro de senha ou email');

      return tokenAndRefreshToken;
    } catch {
      return;
    }
  }

  @Post('refresh')
  @ApiBody({ type: RefreshTokenDto })
  @ApiResponse({
    status: 400,
    description: 'Retorna os erros pelo class-validator',
  })
  async refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body.refreshToken);
  }

  @Delete('logout')
  @ApiBody({ type: RefreshTokenDto })
  @ApiResponse({
    status: 400,
    description: 'Retorna os erros pelo class-validator',
  })
  async logout(@Body() body: RefreshTokenDto) {
    return this.authService.logout(body.refreshToken);
  }
}
