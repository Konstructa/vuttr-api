import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
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
      return this.toolsRepository.save(newTool);
    } catch (error) {
      return error;
    }
  }

  async getByTagName(tag: string) {
    const result = await this.toolsRepository.query(
      `SELECT * FROM tools WHERE JSON_SEARCH(tags -> '$[*]', 'all', '${tag}') IS NOT NULL;`,
    );

    if (result.length === 0)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Nenhum resultado encontrado com essa tag',
        },
        HttpStatus.NOT_FOUND,
      );

    return result;
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
