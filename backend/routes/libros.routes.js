import {Router} from "express";

import {delLibro, getLibros, getOneLibro, postLibro, updateLibro} from "../controller/libros.controller.js";

const router = Router();

router.get("/all", getLibros);
router.get("/one/:id", getOneLibro);
router.post("/new", postLibro);
router.patch("/upd/:id", updateLibro);
router.delete("/del/:id", delLibro);

export default router;