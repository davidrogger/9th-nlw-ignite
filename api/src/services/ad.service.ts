import IAdDB, { IAdConverted } from "../interfaces/Ad.interface";
import { IModelADs } from "../interfaces/Model.interface";
import { IServiceGetById } from "../interfaces/Service.interface";
import convertHourStringToMinutes from "../utils/convertHourStringToMinutes";

class AdService implements IServiceGetById<IAdConverted> {
  constructor(private model:IModelADs<IAdDB>) {}
  
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

  public async createAds(payload: IAdConverted): Promise<IAdConverted> {

    const adFormatted:IAdDB = {
      ...payload,
      weekDays: payload.weekDays.join(','),
      hourStart: convertHourStringToMinutes(payload.hourStart),
      hourEnd: convertHourStringToMinutes(payload.hourEnd),
    };

    const newAd = await this.model.createAD(adFormatted);

    return {
      ...payload,
      id: newAd.id
    };
  }
}

export default AdService;
