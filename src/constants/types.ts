export interface Irating {
  rate: number,
  count: number
}

export interface Iproducts {
  id : number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: Irating
}