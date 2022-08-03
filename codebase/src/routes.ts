import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { SearchUserByNameController } from './controllers/SearchUserByNameController';

const router = Router();

const createUserController = new CreateUserController();
const searchUserByNameController = new SearchUserByNameController();

router.post("/cadastro", createUserController.handler);
router.get("/pesquisarusuario", searchUserByNameController.handler);

export { router }