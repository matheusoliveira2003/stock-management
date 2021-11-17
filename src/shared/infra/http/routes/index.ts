import { Router } from "express";
import exampleModule from "../../../../modules/exampleModule/infra/http/routes/example.routes";
import equipmentTypeRouter from "../../../../modules/equipmentType/infra/http/routes/equipmentType.routes";

const mainRouter = Router();

mainRouter.use('/exampleModule', exampleModule);
mainRouter.use('/equipment-type', equipmentTypeRouter);

export default mainRouter;
