import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsController } from './tools/tools.controller';
import { ToolsService } from './tools/tools.service';
import { ToolsModule } from './tools/tools.module';
import OrmConfig from './config/orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(OrmConfig), ToolsModule],
  controllers: [ToolsController],
  providers: [ToolsService],
})
export class AppModule {}
