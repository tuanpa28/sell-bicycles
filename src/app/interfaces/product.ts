import { ICategory } from './category';

export interface IProduct {
  _id?: string;
  name: string;
  price: number;
  image: Object;
  description: string;
  categoryId: ICategory;
}
