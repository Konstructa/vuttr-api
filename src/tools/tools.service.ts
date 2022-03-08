import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateToolDto } from './dto/create-tool.dto';
import { Tool } from './entities/tool.entity';

@Injectable()
export class ToolsService {
  constructor(
    @Inject('TOOLS_REPOSITORY')
    private toolsRepository: Repository<Tool>,
  ) {}

  getAll() {
    return this.toolsRepository.find();
  }

  async create(createToolDto: CreateToolDto) {
    try {
      const newTool = this.toolsRepository.create(createToolDto);
      const result = await this.toolsRepository.save(newTool);
      return result;
    } catch (error) {
      return error;
    }
  }
}
