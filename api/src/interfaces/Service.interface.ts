interface IServiceGetAll<T> {
  getAll():Promise<T[]>;
}

interface IServiceGetById<T> {
  getById(id:string):Promise<T[]>;
  getDiscordByAdId(id:string):Promise<{discord:string}>;
}

export default IServiceGetAll;

export {
  IServiceGetById
};
