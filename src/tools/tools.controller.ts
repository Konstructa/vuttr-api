import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateToolDto } from './dto/create-tool.dto';
import { ToolsService } from './tools.service';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Listar todas as ferramentas presentes no banco de dados',
  })
  @ApiResponse({ status: 401, description: 'Invalid JWT' })
  @ApiResponse({
    status: 200,
    description:
      'Mostra todas as ferramentas presentes ou encontradas pela tag',
  })
  @ApiResponse({ status: 404, description: 'Retorna uma [] vazia' })
  @ApiQuery({
    name: 'tag',
    description: 'Tag pela qual será buscada as ferramentas',
    required: false,
  })
  getAll(@Query('tag') tag: string) {
    if (!tag) {
      return this.toolsService.getAll();
    }
    return this.toolsService.getByTagName(tag);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar uma ferramentar no banco de dados',
  })
  @ApiResponse({ status: 201, description: 'Retorna os dados criados com id' })
  @ApiResponse({
    status: 400,
    description: 'Retorna os erros pelo class-validator',
  })
  @ApiBody({ type: CreateToolDto })
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolsService.create(createToolDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar uma ferramenta',
  })
  @ApiResponse({ status: 200, description: 'um objeto vazio {}' })
  delete(@Param('id') id: string) {
    return this.toolsService.delete(+id);
  }
}
