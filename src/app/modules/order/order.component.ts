import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Order } from 'src/app/models/order';
import { CartItem } from 'src/app/models/cartItem';
import * as uuid from 'uuid';


interface Gouvernorat {
  value: string;
  gname: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  pname: string;
  lname: string ;
  phone: number ;
  gouvernorat: string;
  ville: string;
  codepostal: number;
  adress: string

  order:Order = new Order();


  cart!: Cart;
  codeUid = '';

  gouvernorats: Gouvernorat[] = [
    {value: 'tunis', gname: 'tunis'},
    {value: 'ariana', gname: 'ariana'},
    {value: 'manouba', gname: 'manouba'},
    {value: 'ben arous', gname: 'ben arous'},
    {value: 'bizerte', gname: 'bizerte'},
    {value: 'baghouan', gname: 'zaghouan'},
    {value: 'nabeul', gname: 'nabeul'},
    {value: 'beja', gname: 'beja'},
    {value: 'jendouba', gname: 'jendouba'},
    {value: 'le kef', gname: 'le kef'},
    {value: 'siliana', gname: 'siliana'},
    {value: 'sousse', gname: 'sousse'},
    {value: 'monastir', gname: 'monastir'},
    {value: 'mahdia', gname: 'mahdia'},
    {value: 'sfax', gname: 'sfax'},
    {value: 'kairouan', gname: 'kairouan'},
    {value: 'sidi bouzid', gname: 'sidi bouzid'},
    {value: 'kasserine', gname: 'kasserine'},
    {value: 'gabes', gname: 'gabes'},
    {value: 'mednine', gname: 'mednine'},
    {value: 'tataouine', gname: 'tataouine'},
    {value: 'gafsa', gname: 'gafsa'},
    {value: 'tozeur', gname: 'tozeur'},
    {value: 'kebili', gname: 'kebili'},
  ];


  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;

    })

    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalAmount = cart.totalPrice;

  }

  ngOnInit(): void {
  }

  addorder(){

    const Id = uuid.v4().substring(2, 13).replace("-", "").toUpperCase();
    this.codeUid = Id;


    this.order.orderRef = this.codeUid;
    console.log(this.order.orderRef);
    console.log(this.pname);

    this.order.coordonnees = {
      pname: this.pname,
      lname: this.lname,
      phone: this.phone
    }

      console.log(this.order.coordonnees)

      this.order.adress = {
        gouvernorat : this.gouvernorat,
        ville : this.ville,
        codepostal : this.codepostal,
        adress : this.adress
      }

      console.log(this.order)
    this.orderService.addOrder(this.order).subscribe({
      next:() => {
        console.log(this.order.orderRef);
        console.log(this.order);
        localStorage.setItem('orderRef', this.order.orderRef);
        this.cartService.clearCart();
        this.router.navigateByUrl('/order-received/' + this.order.orderRef);
      },
      error:(errorResponse) => {
        console.log(errorResponse.error);
      }
    })
  }

}
