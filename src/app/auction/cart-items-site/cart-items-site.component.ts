import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../services/shoping-cart.service';

@Component({
  selector: 'ap-cart-items-site',
  template: `  <span class="badge badge-light">{{cartService.countItems() | async}}</span>  `,
  styles: []
})
export class CartItemsSiteComponent implements OnInit {

  constructor(public cartService: ShopingCartService) { }

  ngOnInit() {
  }

}
