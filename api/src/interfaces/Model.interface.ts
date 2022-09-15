interface IModelGetAll<T> {
  getAll():Promise<T[]>;
}

interface IModelADs<T> {
  getById(id:string):Promise<T[] | null>;
  getDiscordByAdId(id:string):Promise<{discord:string}>;
  createAD(payload:T):Promise<T>;
}

export default IModelGetAll;
export {
  IModelADs,
}
