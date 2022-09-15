interface IModelGetAll<T> {
  getAll():Promise<T[]>;
}

interface IModelGetById<T> {
  getById(id:string):Promise<T[] | null>;
  getDiscordByAdId(id:string):Promise<{discord:string}>;
}

export default IModelGetAll;
export {
  IModelGetById,
}
