interface IModelGetAll<T> {
  getAll():Promise<T[]>;
}

interface IModelGetById<T> {
  getById(id:string):Promise<T[] | null>;
}

export default IModelGetAll;
export {
  IModelGetById,
}
