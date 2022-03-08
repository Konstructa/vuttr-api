import { Connection } from 'typeorm';
import { Tool } from './tool.entity';

export const toolsProviders = [
  {
    provide: 'TOOLS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Tool),
    inject: ['DATABASE_CONNECTION'],
  },
];
