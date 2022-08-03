import { Request, Response } from 'express'
import { CreatePetAdoptionService } from '../services/CreatePetAdoptionService';

export class CreateAdoptionController {

  async handler(request: Request, response: Response) {
    const { 
      expecie,
      raca, 
      cor, 
      nome, 
      idade, 
      sexo, 
      castrado, 
      vacinas, 
      foto } = request.body;

    const newPet = {
      expecie,
      raca, 
      cor, 
      nome, 
      idade, 
      sexo, 
      castrado, 
      vacinas, 
      foto };

    const createPetAdoptionService = new CreatePetAdoptionService();
  }
}