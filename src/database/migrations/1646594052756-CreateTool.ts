import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTool1646594052756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tools',
        columns: [
          {
            name: 'id',
            type: 'INT',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'VARCHAR(50)',
            isNullable: false,
          },
          {
            name: 'link',
            type: 'VARCHAR(2083)',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'TEXT',
            isNullable: false,
          },
          {
            name: 'tags',
            type: 'JSON',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tools');
  }
}
