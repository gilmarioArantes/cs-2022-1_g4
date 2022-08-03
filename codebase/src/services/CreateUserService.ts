import { UserRepository } from '../repositories/UserRepository'
import { UserInterface } from '../models/UserInterface';

export class CreateUserService {

  async execute(user: UserInterface) {
    const userRepository = new UserRepository();

    await userRepository.addUser(user);
  }
}