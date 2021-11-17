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
    ): Promise<EquipmentType[] | void> {
        try {
            response.json(
                await container.resolve(ListEquipmentTypeService).execute()
            );
        } catch (error) {
            next(error);
        }
    }

    async findById(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<EquipmentType | void> {
        try {
            const { id } = request.params;
            response.json(
                await container.resolve(FindEquipmentTypeService).execute(Number(id))
            );
        } catch (error) {
            next(error);
        }
    }
}