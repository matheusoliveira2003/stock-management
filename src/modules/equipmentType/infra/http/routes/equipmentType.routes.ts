import { Router } from "express";
import EquipmentTypeController from "../controllers/EquipmentTypeController";

const equipmentTypeRouter = Router();
const equipmentTypeController = new EquipmentTypeController();

equipmentTypeRouter.get('', equipmentTypeController.list);
equipmentTypeRouter.get('/:id', equipmentTypeController.find);

export default equipmentTypeRouter;