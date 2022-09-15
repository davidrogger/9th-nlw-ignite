import { Request, Response } from "express";
import { IAdConverted } from "../interfaces/Ad.interface";
import { IServiceGetById } from "../interfaces/Service.interface";
import { StatusCodes } from 'http-status-codes';

class AdController {
  constructor(private service:IServiceGetById<IAdConverted>) {}

  public async getById(req:Request, res:Response) {
    const gameId = req.params.id;
    // coleta todas publicações com base no id do jogo.
    const gameAds = await this.service.getById(gameId);
    res.status(StatusCodes.OK).json(gameAds);
  }

  public async getDiscordByAdId(req:Request, res:Response) {
    const adId = req.params.id;
    const discord = await this.service.getDiscordByAdId(adId);
    res.status(200).json(discord);
  }

  public async create(req: Request, res:Response) {
    const gameId = req.params.id;
    const payload = { gameId, ...req.body };
    const newAd = await this.service.createAds(payload);
    res.status(201).json(newAd);
  }
}

export default AdController;
