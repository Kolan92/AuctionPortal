import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopingCartService } from '../services/shoping-cart.service';

@Component({
  selector: 'ap-cart-site',
  templateUrl: './cart-site.component.html',
  styles: []
})
export class CartSiteComponent implements OnInit, OnDestroy {

  constructor(public cartService: ShopingCartService) { }

  ngOnInit() {
    console.log('Component initialized');
  }

  ngOnDestroy(): void {
    console.log('Component destroyed');
  }
}
