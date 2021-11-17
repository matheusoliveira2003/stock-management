import {inject, injectable} from "tsyringe";
import IEquipmentTypeDTO from "../dtos/IEquipmentTypeDTO";
import IEquipmentTypeRepository from "../repositories/IEquipmentTypeRepository";
import EquipmentTypeRepository from "../infra/typeorm/repositories/EquipmentTypeRepository";

@injectable()
export default class FindEquipmentTypeService {
    constructor(
        @inject(EquipmentTypeRepository)
        private equipmentTypeRepository: IEquipmentTypeRepository,
    ) {}

    public async execute(id: number): Promise<IEquipmentTypeDTO | undefined> {
        return await this.equipmentTypeRepository.findById(id);
    }
}