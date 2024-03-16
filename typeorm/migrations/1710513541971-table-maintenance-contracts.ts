import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableMaintenanceContracts1710513541971
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'maintenance_contracts',
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
            isNullable: false,
          },
          {
            name: 'user_id', // Foreign key referencing the 'users' table
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'customer_name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'clm_header_number',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'clm_line_number',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'type_contract',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'company_id', // Foreign key referencing the 'companies' table
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'status_id', // Foreign key referencing the 'companies' table
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'renewal_start_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'renewal_end_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'contract_total_amount',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: 'dollars_exchange_rate',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: 'contract_total_amount_usd',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: 'justify',
            type: 'varchar',
            length: '2000',
            isNullable: false,
          },
          {
            name: 'current_level',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'current_approver_id',
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'level_approval_id',
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'uf',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
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
            columnNames: ['company_id'],
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['status_id'],
            referencedTableName: 'status',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['current_approver_id'],
            referencedTableName: 'approvers',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['level_approval_id'],
            referencedTableName: 'approval_level',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('maintenance_contracts');
  }
}
