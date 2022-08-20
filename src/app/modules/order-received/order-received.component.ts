import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';




@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.component.html',
  styleUrls: ['./order-received.component.scss']
})
export class OrderReceivedComponent implements OnInit {

  order!:Order;


  constructor( private orderService:OrderService, private router: Router, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      console.log(params.orderRef)
      if(params.orderRef)
      orderService.getOrderRef(params.orderRef).subscribe(result => {
        this.order = result[0];
      });
    })
  }

  ngOnInit(): void {
  }

}
