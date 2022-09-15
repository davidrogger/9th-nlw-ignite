import { Request, Response } from "express";
import IGame from "../interfaces/Game.interface";
import IService from "../interfaces/Service.interface";
import { StatusCodes } from 'http-status-codes';

class GameController {
  constructor(private service:IService<IGame>) {}

  public async getAll(_req:Request, res:Response) {
    const games = await this.service.getAll();
    res.status(StatusCodes.OK).json(games);
  }
}

export default GameController;
