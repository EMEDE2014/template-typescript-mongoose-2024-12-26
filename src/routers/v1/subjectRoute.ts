import express from "express";
import SubjectController from "../../Controllers/SubjectController";

const router = express.Router();

router.get("/", SubjectController.store);

export default router;
