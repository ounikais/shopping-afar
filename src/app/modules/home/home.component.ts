import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProduitService } from 'src/app/services/produit.service';
import { CartService } from 'src/app/services/cart.service';
import { Produit } from 'src/app/models/produit';
import { Cart } from 'src/app/models/cart';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {





  cart!: Cart;

  cartQuantity=0;
  cartPrice=0;

  produits: Produit[] = [];


constructor(private produitService: ProduitService, private cartService:CartService, private router: Router, activatedRoute: ActivatedRoute) {

       let produitObservalbe:Observable<Produit[]>;
       produitObservalbe = produitService.getAllProduit();
       produitObservalbe.subscribe((result) => {
        this.produits = result;

      });

      cartService.getCartObservable().subscribe((newCart) => {
        this.cart = newCart;
        this.cartQuantity = newCart.totalCount;
        this.cartPrice = newCart.totalPrice;
      })



}


  ngOnInit(){

  }

  addToCart(produit: Produit){
    this.cartService.addToCart(produit);
    console.log(produit.id)
  }

  clearCart(){
    this.cartService.clearCart()
  }

}







