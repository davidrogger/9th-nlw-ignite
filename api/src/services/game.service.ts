import IGame from "../interfaces/Game.interface";
import IModelGetAll from "../interfaces/Model.interface";
import IServiceGetAll from "../interfaces/Service.interface";

class GameService implements IServiceGetAll<IGame> {
  constructor(private model:IModelGetAll<IGame>) {}
  
  public async getAll():Promise<IGame[]> {
    return this.model.getAll();
  }
}

export default GameService;
