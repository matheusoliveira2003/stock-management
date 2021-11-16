import {container, injectable} from "tsyringe";
import {NextFunction, Request, Response} from "express";
import EquipmentTypeEntity from "../../typeorm/entities/EquipmentTypeEntity";
import ListEquipmentTypeService from "../../../services/ListEquipmentTypeService";

@injectable()
export default class EquipmentTypeController {
    async listEquipmentType(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<EquipmentTypeEntity[] | void> {
        try {
            const listEquipmentTypeService = container.resolve(ListEquipmentTypeService)
            response.json(await listEquipmentTypeService.execute());
        } catch (error) {
            next(error);
        }
    }
}