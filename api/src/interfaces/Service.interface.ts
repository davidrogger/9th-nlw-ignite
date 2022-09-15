interface IServiceGetAll<T> {
  getAll():Promise<T[]>;
}

interface IServiceGetById<T> {
  getById(id:string):Promise<T[]>;
}

export default IServiceGetAll;

export {
  IServiceGetById
};
