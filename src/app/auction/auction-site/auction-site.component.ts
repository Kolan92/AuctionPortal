import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuctionItem } from '../Models/auction-item';
import { AuctionService } from '../services/auction-service.service';
import {delay} from 'rxjs/operators';
import { ShopingCartService } from '../services/shoping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ap-auction-site',
  templateUrl: './auction-site.component.html',
  styleUrls: ['./auction-site.component.css']
})
export class AuctionSiteComponent implements OnInit, OnDestroy {

  public auctions: AuctionItem[];
  public isLoading = true;
  public errorMessage = '';
  public filter: '';
  private subscription = new Subscription();

  constructor(
    private auctionService: AuctionService,
    private cartService: ShopingCartService
    ) { }

  ngOnInit(): void {
    this.subscription.add(this.auctionService.getAll()
      .subscribe(
      auctions => {
        this.auctions = auctions;
      },
      error => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  public handleAddToCartEvent($event: AuctionItem): void {
    this.cartService.addItem($event);
  }
}
