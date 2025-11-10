import express from "express";
const router = express.Router();//Router gerencia as rotas
import {
  getApiInfoController,
  checkHealthController
} from "../controllers/app.controllers.js";

router.get('/', getApiInfoController);
router.get('/health', checkHealthController);

export default router;
