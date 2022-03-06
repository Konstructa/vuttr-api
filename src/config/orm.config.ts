import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_DB_HOST,
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [__dirname + '/../**/entities/*.entity.{ts,js}'],
};

export const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
export default OrmConfig;
