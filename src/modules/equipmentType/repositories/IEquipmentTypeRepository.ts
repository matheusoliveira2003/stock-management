import IEquipmentTypeDTO from "../dtos/IEquipmentTypeDTO";
import EquipmentType from "../infra/typeorm/entities/EquipmentType";

export default interface IEquipmentTypeRepository {
    findById(id: number): Promise<EquipmentType | undefined>;
    find(): Promise<IEquipmentTypeDTO[]>;
}