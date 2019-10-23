import { Component, EventEmitter,Input, Output } from '@angular/core';
import { AuctionItem } from '../Models/auction-item';
import { ShopingCartService } from '../services/shoping-cart.service';

@Component({
  selector: 'ap-auction-item',
  templateUrl: './auction-item.component.html',
  styles: []
})
export class AuctionItemComponent {

  constructor() {}

  @Input()
  public auction: AuctionItem;
  @Output()
  public addToCartClick = new EventEmitter<AuctionItem>();


}
