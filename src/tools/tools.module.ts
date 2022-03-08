import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { toolsProviders } from './entities/tools.providers';
import { ToolsService } from './tools.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ToolsController],
  providers: [...toolsProviders, ToolsService],
})
export class ToolsModule {} 