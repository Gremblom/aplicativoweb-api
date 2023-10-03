import {Router} from "express";

import {delLibro, getLibros, getOneLibro, postLibro, updateLibro} from "../controller/controllers.js";

const router = Router();

router.get("/:colection/all", getLibros);
router.get("/:colection/one/:id", getOneLibro);
router.post("/:colection/new", postLibro);
router.patch("/:colection/upd/:id", updateLibro);
router.delete("/:colection/del/:id", delLibro);

export default router;