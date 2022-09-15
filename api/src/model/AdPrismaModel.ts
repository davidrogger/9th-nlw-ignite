import { PrismaClient } from "@prisma/client";
import IAdDB from "../interfaces/Ad.interface";
import { IModelADs } from "../interfaces/Model.interface";

class AdPrismaModel implements IModelADs<IAdDB> {
  constructor(private model:PrismaClient) {}
  public async getById(gameId:string):Promise<IAdDB[]> {
    const ads = await this.model.ads.findMany({
      where: {
        gameId
      },
      select: {
        id: true,
        gameId: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      orderBy: {
        createdAt: 'desc',
      }
    });
    
    return ads;
  }

  public async getDiscordByAdId(adId:string):Promise<{ discord:string }> {
    const ad = await this.model.ads.findUnique(
      {
        where: { id: adId },
        select: { discord: true },
      },
    );
    
    if (!ad) throw new Error('NotFound');

    return ad
  }
  
  public async createAD(payload:IAdDB): Promise<IAdDB> {
    return this.model.ads.create({
      data: {
        ...payload,
        discord: payload.discord || 'temporary',
      }
    });

  }

}

export default AdPrismaModel;
