import { Request, Response } from 'express'
import { SearchUserByName } from '../services/SearchUserByName';

export class SearchUserByNameController {

  async handler(request: Request, response: Response) {
    const { name } = request.body;

    const searchUserByName = new SearchUserByName();

    const user = await searchUserByName.execute(name);

    response.json(user);
  }
}