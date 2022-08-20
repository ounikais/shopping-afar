import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  cart!: Cart;

  qty: number;

  cartQuantity=0;
  cartPrice=0;

  constructor(private cartService:CartService, private router: Router) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cart = newCart;
      this.cartQuantity = newCart.totalCount;
      this.cartPrice = newCart.totalPrice;
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
