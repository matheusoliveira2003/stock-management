import {MigrationInterface, Table, QueryRunner, TableColumn} from "typeorm";

export class stockManagementEquipmentTypeMigration1637171368079 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'equipment_type',
            columns: [
                new TableColumn({
                    name: 'id_sys_default_equipment_type',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                }),
                new TableColumn({
                    name: 'type',
                    type: 'varchar(255)',
                    isNullable: false,
                }),
                new TableColumn({
                    name: 'created_at',
                    type: 'datetime',
                    isNullable: false,
                    default: 'now()',
                }),
                new TableColumn({
                    name: 'updated_at',
                    type: 'datetime',
                    isNullable: false,
                    default: 'now()',
                }),
                new TableColumn({
                    name: 'deleted_at',
                    type: 'datetime',
                    isNullable: false,
                }),
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('equipment_type')
    }

}
