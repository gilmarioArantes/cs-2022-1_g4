import { PrismaClient } from "@prisma/client"
import { response } from "express";
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

  async emailIsInUse(userEmail: string) {
    try {
      const result = await prisma.user.findFirst({
        where: {
          email: userEmail
        }
      });

      if (result) return true;
      return false;
    } catch(error) {
      console.log(error);
    }
  }
}