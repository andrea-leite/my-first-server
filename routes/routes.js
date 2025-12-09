import express from "express";
const router = express.Router();//Router gerencia as rotas

import {
  getApiInfoController,
  checkHealthController
} from "../controllers/app.controllers.js";
import { checkProdutoController, createProductController } from "../controllers/produto.controllers.js";
import { createUserController, getAllUsersController } from "../controllers/user.controller.js"; 

router.get('/', getApiInfoController);
router.get('/health', checkHealthController);
router.get('/produto', checkProdutoController);
router.post('/produto', createProductController);

router.post('/usuario', createUserController);
router.get('/usuario', getAllUsersController);

export default router;
