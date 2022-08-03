import { UserRepository } from '../repositories/UserRepository'

export class SearchUserByName {

  async execute(name: string) {
    const userRepository = new UserRepository();

    return await userRepository.getUserByName(name);
  }
}