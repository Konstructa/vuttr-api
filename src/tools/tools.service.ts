import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Raw, Repository } from 'typeorm';
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

  async getByTagName(tag: string) {
    return this.toolsRepository.query(
      `SELECT * FROM tools WHERE JSON_SEARCH(tags -> '$[*]', 'all', '${tag}') IS NOT NULL;`,
    );
  }

  delete(id: number) {
    try {
      this.toolsRepository.delete(id);
      return {};
    } catch {
      return 'Internal Error';
    }
  }
}
