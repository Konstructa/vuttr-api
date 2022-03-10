import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RefreshTokenDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Este é o refresh token gerado junto com o token',
  })
  refreshToken: string;
}
