import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProduitService } from 'src/app/services/produit.service';
import { CartService } from 'src/app/services/cart.service';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produit!: Produit;

  constructor(private produitService: ProduitService, private cartService:CartService, private router: Router, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      console.log(params.id)
      if(params.id)
      produitService.getProduit(params.id).subscribe(result => {
        this.produit = result;
      });
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.produit);
  }

}
