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
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateToolDto } from './dto/create-tool.dto';
import { ToolsService } from './tools.service';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(@Query('tag') tag: string) {
    if (!tag) {
      return this.toolsService.getAll();
    }
    return this.toolsService.getByTagName(tag);
  }

  @Post()
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolsService.create(createToolDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.toolsService.delete(+id);
  }
}
