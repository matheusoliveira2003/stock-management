import {container, injectable} from "tsyringe";
import {NextFunction, Request, Response} from "express";
import EquipmentType from "../../typeorm/entities/EquipmentType";
import ListEquipmentTypeService from "../../../services/ListEquipmentTypeService";
import FindEquipmentTypeService from "../../../services/FindEquipmentTypeService";

@injectable()
export default class EquipmentTypeController {
    async list(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const service = container.resolve(ListEquipmentTypeService);
            response.json(await service.execute());
        } catch (error) {
            next(error);
        }
    }

    async find(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<EquipmentType | void> {
        try {
            const { id } = request.params;
            const service = container.resolve(FindEquipmentTypeService);
            response.json(await service.execute(Number(id)));
        } catch (error) {
            next(error);
        }
    }
}