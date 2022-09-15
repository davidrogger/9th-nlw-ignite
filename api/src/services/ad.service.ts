import IAdDB, { IAdConverted } from "../interfaces/Ad.interface";
import { IModelGetById } from "../interfaces/Model.interface";
import { IServiceGetById } from "../interfaces/Service.interface";

class AdService implements IServiceGetById<IAdConverted> {
  constructor(private model:IModelGetById<IAdDB>) {}
  
  public async getById(id:string):Promise<IAdConverted[]> {
    const gameAd = await this.model.getById(id);

    if (!gameAd) return [];

    const gameNewFormeted = gameAd.map((game) => {
      return {
        ...game,
        weekDays: game.weekDays.split(','),
        hourStart: game.hourStart.toString(),
        hourEnd: game.hourEnd.toString(),
      };
    });

    return gameNewFormeted;
  }

  public async getDiscordByAdId(id:string):Promise<{discord:string}> {
    return this.model.getDiscordByAdId(id);
  }
}

export default AdService;
