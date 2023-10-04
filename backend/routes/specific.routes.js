import {Router} from "express";

import {getAll} from "../controller/stockLibros.controller.js";
import {getAllRentas} from "../controller/rentas.controller.js";

const router = Router();

router.get('/stockLibros/all', getAll);
router.get('/rentas/all', getAllRentas);

export default router;