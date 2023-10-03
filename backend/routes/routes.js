import {Router} from "express";

import {get, getOne, post, update, deleter} from "../controller/controllers.js";

const router = Router();

router.get("/:colection/all", get);
router.get("/:colection/one/:id", getOne);
router.post("/:colection/new", post);
router.patch("/:colection/upd/:id", update);
router.delete("/:colection/del/:id", deleter);

export default router;