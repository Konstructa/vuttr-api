import { createConnection } from 'typeorm';
import 'dotenv';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: process.env.MYSQL_DB_HOST,
        port: 3306 || 3308,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        migrations: [__dirname + 'src/database/migrations/*.{ts}'],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
        synchronize: true,
        migrationsRun: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
  },
];
