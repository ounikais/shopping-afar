import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProduitComponent } from './modules/produit/produit.component';
import { CartComponent } from './modules/cart/cart.component';
import { OrderComponent } from './modules/order/order.component';
import { RegisterComponent } from './modules/register/register.component';
import { OrderReceivedComponent } from './modules/order-received/order-received.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },{
    path: 'produit/:id',
    component:ProduitComponent
  },{
    path: 'cart',
    component:CartComponent
  },{
    path: 'order',
    component:OrderComponent
  },{
    path: 'order-received/:orderRef',
    component:OrderReceivedComponent
  },{
    path: 'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
