import { Produit } from "./produit";

export class CartItem{
  constructor(public produit:Produit){ }
  quantity:number = 1 ;
  price: number = this.produit.produitPrice;
}
