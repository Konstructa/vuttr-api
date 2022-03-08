import { Module } from '@nestjs/common';
import { ToolsController } from './tools/tools.controller';
import { ToolsService } from './tools/tools.service';
import { ToolsModule } from './tools/tools.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { toolsProviders } from './tools/entities/tools.providers';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ToolsModule,
    DatabaseModule,
  ],
  controllers: [ToolsController],
  providers: [...toolsProviders, ToolsService],
})
export class AppModule {}
