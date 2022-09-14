interface IService<T> {
  getAll():Promise<T[]>;
}

export default IService;
