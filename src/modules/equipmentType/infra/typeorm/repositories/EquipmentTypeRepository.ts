import {injectable} from "tsyringe";
import {getRepository, Repository} from "typeorm";
import EquipmentType from "../entities/EquipmentType";
import IEquipmentTypeRepository from "../../../repositories/IEquipmentTypeRepository";

@injectable()
export default class EquipmentTypeRepository implements IEquipmentTypeRepository {
    private repository: Repository<EquipmentType>
    constructor() {
        this.repository = getRepository(EquipmentType)
    }

    find(): Promise<EquipmentType[]> {
        return this.repository.find();
    }

    async findById(id: number): Promise<EquipmentType | undefined> {
        return this.repository.findOne(id);
    }
}