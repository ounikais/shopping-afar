import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(produit: Produit): void {
    let cartItem = this.cart.items
      .find(item => item.produit.id === produit.id);

      if(cartItem === undefined){
        this.cart.items.push(new CartItem(produit));
        this.setCartToLocalStorage();
      }else {
        cartItem.quantity = cartItem.quantity + 1;
        cartItem.price = cartItem.quantity  * cartItem.produit.produitPrice;
        this.setCartToLocalStorage();
      }

  }

  removeFromCart(produitId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.produit.id != produitId);
    this.setCartToLocalStorage();
  }

  changeQuantity(produitId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.produit.id === produitId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.produit.produitPrice;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
