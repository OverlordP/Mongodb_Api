import { Router } from "express";
import Tarea from "../models/Task"

import * as IndexControl from "../controllers/index.controllers"

const router = Router();

router.get('/', IndexControl.getIndex);
router.get('/:id', IndexControl.getIndexOne);
router.post('/',IndexControl.postIndex);
router.delete('/:id',IndexControl.deleteIndexOne);


export default router;