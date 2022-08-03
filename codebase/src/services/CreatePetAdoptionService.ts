import { PetInterface } from '../models/PetInterface';
import { PetRepository } from '../repositories/PetRepository';

export class CreatePetAdoptionService {

  async execute(newPet: PetInterface) {
    const petRepository = new PetRepository();

    const pet = await petRepository.addPet(newPet);

    console.log(pet)
  }
}