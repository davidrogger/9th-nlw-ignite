import { PrismaClient } from "@prisma/client";
import IAdDB from "../interfaces/Ad.interface";
import { IModelGetById } from "../interfaces/Model.interface";

class AdPrismaModel implements IModelGetById<IAdDB> {
  constructor(private model:PrismaClient) {}
  public async getById(gameId:string):Promise<IAdDB[]> {
    return this.model.ads.findMany({
      where: {
        gameId
      },
      select: {
        id: true,
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
  
}

export default AdPrismaModel;
