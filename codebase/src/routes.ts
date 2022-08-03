import { Router } from 'express';
import { 
  CreateUserController,
  CreateAdoptionController,
} from './controllers';


const router = Router();

const createAdoptionController = new CreateAdoptionController();
const createUserController = new CreateUserController();

router.post("/cadastro", createUserController.handler);
router.post("/adoptions", createAdoptionController.handler);
/* router.post("/disappearance")
router.post("/fidings") */

export { router }