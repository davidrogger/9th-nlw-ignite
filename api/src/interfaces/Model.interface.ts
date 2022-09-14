interface IModel<T> {
  getAll():Promise<T[]>;
}

export default IModel;
