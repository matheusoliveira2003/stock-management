import IEquipmentTypeDTO from "../../../dtos/IEquipmentTypeDTO";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('equipment_type')
export default class EquipmentType implements IEquipmentTypeDTO {
    @PrimaryGeneratedColumn({ name: 'id_default_equipment_type' })
    id!: number;

    @Column()
    type!: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt!: Date;
}