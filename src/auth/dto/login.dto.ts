import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ApiProperty({
    description: 'Este é email do usuário para fazer login',
    example: 'mariabetania@gmail.com',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Este é a senha do usuário',
    example: 'teamo',
  })
  password: string;
}
