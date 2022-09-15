interface IServiceGetAll<T> {
  getAll():Promise<T[]>;
}

interface IServiceGetById<T> {
  getById(id:string):Promise<T[]>;
  getDiscordByAdId(id:string):Promise<{discord:string}>;
  createAds(payload:unknown):Promise<T>;
}

export default IServiceGetAll;

export {
  IServiceGetById
};
