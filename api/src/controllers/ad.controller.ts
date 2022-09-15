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

  public async getDiscordByAdId() {
    
  }
}

export default AdController;
