import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
