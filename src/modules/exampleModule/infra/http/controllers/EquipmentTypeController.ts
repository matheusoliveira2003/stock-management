import {container, injectable} from "tsyringe";
import {NextFunction, Request, Response} from "express";
import EquipmentTypeEntity from "../../typeorm/entities/EquipmentTypeEntity";
import ListEquipmentTypeService from "../../../services/ListEquipmentTypeService";

@injectable()
export default class EquipmentTypeController {
    async list(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<EquipmentTypeEntity[] | void> {
        try {
            response.json(
                await container.resolve(ListEquipmentTypeService).execute()
            );
        } catch (error) {
            next(error);
        }
    }

    // async findById(
    //     request: Request,
    //     response: Response,
    //     next: NextFunction
    // ): Promise<EquipmentTypeEntity | void> {
    //     try {
    //         const { id } = request.params;
    //         response.json(await container.resolve())
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}