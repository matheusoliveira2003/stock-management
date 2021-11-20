import IEquipmentTypeDTO from "../../../dtos/IEquipmentTypeDTO";
import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('equipment_type')
export default class EquipmentType implements IEquipmentTypeDTO {
    @PrimaryGeneratedColumn({ name: 'id_default_equipment_type' })
    id!: number;

    @Column()
    type!: string;
}