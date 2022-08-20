import { CartItem } from "./cartItem";


export interface Coordonnees{
  pname: string;
  lname: string;
  phone: number
}

export interface Adress{
  gouvernorat: string;
  ville: string;
  codepostal: number;
  adress: string
}



export class Order {

  id: string;
  orderRef: string;
  items:CartItem[];
  totalAmount: number;
  coordonnees:Coordonnees;
  adress:Adress;
  orderStatus: string;
  createdAt: Date

}
