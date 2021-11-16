import IEquipmentTypeDTO from "../dtos/IEquipmentTypeDTO";

export default interface IEquipmentTypeRepository {
    find(): Promise<IEquipmentTypeDTO[]>;
}