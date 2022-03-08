import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { ToolsService } from './tools.service';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Get()
  getAll() {
    return this.toolsService.getAll();
  }

  @Post()
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolsService.create(createToolDto);
  }

  @Get('/?tag=:tag')
  getByTagName(@Param('tag') tag: string) {
    return this.toolsService.getByTagName(tag);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.toolsService.delete(+id);
  }
}
