export interface Product {
  id: string;
  title: string;
  permalink: string;
  category_id: string;
  thumbnail: string;
  price: number;
  currency_id: string;
  image: string;
  category: string;
  numReviews: number;
  countInStock: number;
}

export interface Category {
  id: string;
  name: string;
  parentId: string | null;
}
