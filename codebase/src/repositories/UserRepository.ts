import { PrismaClient } from "@prisma/client"
import { UserInterface } from "../models/UserInterface";

const prisma = new PrismaClient()

export class UserRepository {

  async addUser(user: UserInterface) {
    try {
      await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          senha: user.senha
        }
      });
    } catch(error) {
      console.log(error);
    }
  }

  async getUserByName(name: string) {
    try {
      var searchedUser = null;

      await prisma.user.findMany({
        where: {
          name: name
        }
      }).then (user => {
        searchedUser = user;
      });

      return searchedUser;

    } catch (error) {
      console.log(error);
    }
  }
}