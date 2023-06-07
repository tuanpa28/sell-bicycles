import { ICategory } from './category';

export interface IProduct {
  _id?: string;
  name: string;
  price: number;
  image: {
    url : string;
    publicId : string;
  };
  description: string;
  categoryId: ICategory;
}
