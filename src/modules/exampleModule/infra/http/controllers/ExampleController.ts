import {container, injectable} from "tsyringe";
import {NextFunction, Request, Response} from "express";
import ExampleEntity from "../../typeorm/entities/ExampleEntity";
import ListExampleService from "../../../services/ListExampleService";

@injectable()
export default class ExampleController {
    async listExample(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<ExampleEntity[] | void> {
        try {
            const listExampleService = container.resolve(ListExampleService)
            response.json(await listExampleService.execute());
        } catch (error) {
            next(error);
        }
    }
}