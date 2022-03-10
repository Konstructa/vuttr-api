import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateToolDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Este é o nome da ferramenta',
    example: 'Notion',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Este é o link para acessar a ferramenta',
    example: 'https://notion.so',
  })
  link: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Este é a descrição da ferramenta',
    example:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
  })
  description: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ApiProperty({
    type: [String],
    description:
      'Este é uma array de elementos que classificam ou compões a ferramenta',
    example:
      '["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]',
  })
  tags: string[];
}
