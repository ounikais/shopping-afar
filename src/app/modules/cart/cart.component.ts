import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.produit.id);
  }

  changeQuantity(cartItem:CartItem,diff:number){
    const quantity = cartItem.quantity + diff;
    if(quantity >= 1){
      this.cartService.changeQuantity(cartItem.produit.id, quantity);

    }else{
      this.cartService.removeFromCart(cartItem.produit.id);
    }
  }

  changeQuantity1(cartItem:CartItem,event:any){
    const quantity = parseInt(event.target.value);
    if(quantity >= 1){
      this.cartService.changeQuantity(cartItem.produit.id, quantity);

    }else{
      this.cartService.removeFromCart(cartItem.produit.id);
    }
  }

}
