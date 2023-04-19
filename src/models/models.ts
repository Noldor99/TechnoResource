export interface IProduct {
  id: number;
  name: string;
  imageURL: string;
  brand: string;
  category: string;
  desc: string;
  price: number;
}

export interface IProducts {
  products: IProduct[];
}
