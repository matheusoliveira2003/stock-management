import { Router } from 'express';
import ExampleController from "../controllers/ExampleController";

const exampleModule = Router();
const exampleController = new ExampleController();

exampleModule.get('', exampleController.listExample)

export default exampleModule;
