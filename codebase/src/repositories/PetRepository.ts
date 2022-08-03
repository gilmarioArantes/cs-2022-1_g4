import { PrismaClient } from "@prisma/client"
import { PetInterface } from "../models/PetInterface";

const prisma = new PrismaClient()

export class PetRepository {

  async addPet(newPet: PetInterface) {
    try {
      await prisma.pet.create({
        data: {
          nome: newPet.nome,
          especie: newPet.especie,
          foto: newPet.foto,
        }
      });
    } catch(error) {
      console.log(error);
    }
  }
}