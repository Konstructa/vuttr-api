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
  async login(@Req() request, @Ip() ip: string, @Body() body: LoginDto) {
    try {
      const check = await this.authService.login(body.email, body.password, {
        ipAdress: ip,
        userAgent: request.headers['user-agent'],
      });

      if (!check) throw new UnauthorizedException('Erro de senha ou email');
    } catch {
      return;
    }
  }

  @Post('refresh')
  async refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body.refreshToken);
  }

  @Delete('logout')
  async logout(@Body() body: RefreshTokenDto) {
    return this.authService.logout(body.refreshToken);
  }
}
