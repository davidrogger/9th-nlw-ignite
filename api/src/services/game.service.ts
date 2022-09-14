import IGame from "../interfaces/Game.interface";
import IModel from "../interfaces/Model.interface";
import IService from "../interfaces/Service.interface";

class GameService implements IService<IGame> {
  constructor(private model:IModel<IGame>) {}
  
  public async getAll():Promise<IGame[]> {
    return this.model.getAll();
  }
}

export default GameService;
