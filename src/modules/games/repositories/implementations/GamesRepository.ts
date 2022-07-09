import { getRepository, Repository } from "typeorm";

import { User } from "../../../users/entities/User";
import { Game } from "../../entities/Game";

import { IGamesRepository } from "../IGamesRepository";

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    return this.repository
      .createQueryBuilder("games")
      .where("games.title ilike :title", { title: `%${param}%` })
      .getMany();
    // Complete usando query builder
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query("SELECT count(*) FROM public.games"); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    console.log(await this.repository.createQueryBuilder('games').relation('users').select('*').getMany());
    
    return this.repository.query(`select * from public.users u 
    left join 	users_games_games ugg on u.id = ugg."usersId"
    where ugg."gamesId" = '${id}'`)
    // Complete usando query builder
  }
}
