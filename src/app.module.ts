import { Module } from '@nestjs/common';
import { ToolsController } from './tools/tools.controller';
import { ToolsService } from './tools/tools.service';
import { ToolsModule } from './tools/tools.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { toolsProviders } from './tools/entities/tools.providers';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ToolsModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [ToolsController],
  providers: [...toolsProviders, ToolsService],
})
export class AppModule {}
