import { PrismaClient } from "@prisma/client";
import IGame from "../interfaces/Game.interface";
import IModelGetAll from "../interfaces/Model.interface";

class GamePrismaModel implements IModelGetAll<IGame> {
  constructor(private model:PrismaClient) {}
  public async getAll():Promise<IGame[]> {
    return this.model.games.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          }
        }
      }
    });
  }
}

export default GamePrismaModel;
