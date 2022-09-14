import { PrismaClient } from "@prisma/client";
import IGame from "../interfaces/Game.interface";
import IModel from "../interfaces/Model.interface";

class GamePrismaModel implements IModel<IGame> {
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
