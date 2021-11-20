import {inject, injectable} from "tsyringe";
import IEquipmentTypeDTO from "../dtos/IEquipmentTypeDTO";
import IEquipmentTypeRepository from "../repositories/IEquipmentTypeRepository";
import EquipmentTypeRepository from "../infra/typeorm/repositories/EquipmentTypeRepository";

@injectable()
export default class ListEquipmentTypeService {
    constructor(
        @inject(EquipmentTypeRepository)
        private equipmentTypeRepository: IEquipmentTypeRepository,
    ) {}

    public async execute(): Promise<IEquipmentTypeDTO[] | []> {
        return this.equipmentTypeRepository.find();
    }
}