import {injectable} from "tsyringe";
import {getRepository, Repository} from "typeorm";
import EquipmentTypeEntity from "../entities/EquipmentTypeEntity";
import IEquipmentTypeRepository from "../../../repositories/IEquipmentTypeRepository";

@injectable()
export default class EquipmentTypeRepository implements IEquipmentTypeRepository {
    private repository: Repository<EquipmentTypeEntity>
    constructor() {
        this.repository = getRepository(EquipmentTypeEntity)
    }

    find() {
        return this.repository.find();
    }
}