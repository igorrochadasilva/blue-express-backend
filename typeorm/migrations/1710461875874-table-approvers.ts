import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableApprovers1710461875874 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'approvers',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            unsigned: true,
          },
          {
            name: 'title',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'level',
            type: 'int',
          },
          {
            name: 'allCompanies',
            type: 'boolean',
            default: false, // Optional default: Approver cannot approve for all companies
          },
          {
            name: 'competence',
            type: 'int',
          },
          {
            name: 'user_id', // Foreign key referencing the 'users' table
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'companies_id', // Foreign key referencing the 'users' table
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['companies_id'],
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('approvers');
  }
}
