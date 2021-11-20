import { Router } from "express";
import equipmentTypeRouter from "../../../../modules/equipmentType/infra/http/routes/equipmentType.routes";

const mainRouter = Router();

mainRouter.use('/equipment-type', equipmentTypeRouter);

export default mainRouter;
