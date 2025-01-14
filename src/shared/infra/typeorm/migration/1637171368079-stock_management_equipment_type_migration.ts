import {MigrationInterface, Table, QueryRunner, TableColumn} from "typeorm";

export class stockManagementEquipmentTypeMigration1637171368079 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'equipment_type',
            columns: [
                new TableColumn({
                    name: 'id_default_equipment_type',
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
            ],
        }))
        await queryRunner.query("INSERT INTO equipment_type (type) VALUES ('Quantitative')")
        await queryRunner.query("INSERT INTO equipment_type (type) VALUES ('Serialized')")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('equipment_type')
    }

}
