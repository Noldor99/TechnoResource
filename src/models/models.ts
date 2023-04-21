export interface IProduct {
  id: string;
  name: string;
  imageURL?: string;
  brand: string;
  category: string;
  desc: string;
  price: number;
  createdAt?: Date;
}

export interface IProducts {
  products: IProduct[];
}

export interface ICard {
  id: string;
  desc: string;
  name: string;
  imageURL?: string;
  price: number;
  category: string;
  brand: string;
  cartQuantity: number;
}
