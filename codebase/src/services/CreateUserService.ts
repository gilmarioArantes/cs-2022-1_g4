import { UserRepository } from '../repositories/UserRepository'
import { UserInterface } from '../models/UserInterface';
import { hash } from 'bcryptjs';
export class CreateUserService {

  async execute(newUser: UserInterface) {
    const userRepository = new UserRepository();

    //garantir que o email não está sendo utilizado
    const isInUse = await userRepository.emailIsInUse(newUser.email);

    if(isInUse) {
      throw new Error('Usuário já cadastrado');
    }

    //criar um hash da senha do usuário
    const passwordHash = await hash(newUser.senha, 8)

    const user = await userRepository.addUser(newUser);

    return user;
  }
}