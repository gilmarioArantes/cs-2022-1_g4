import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {

  async handler(request: Request, response: Response) {
    const { 
      name,
      email, 
      logradouro, 
      numero, 
      complemento, 
      bairro, 
      cidade, 
      estado, 
      senha, 
      telefone, 
      CEP } = request.body;

    const newUser = {
      name, 
      email, 
      logradouro, 
      numero, 
      complemento, 
      bairro, 
      cidade, 
      estado, 
      senha, 
      telefone, 
      CEP };

    const createUserService = new CreateUserService();

    return response.json(createUserService.execute(newUser));
  }
}