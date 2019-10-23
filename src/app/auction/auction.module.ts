import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionSiteComponent } from './auction-site/auction-site.component';
import { AuctionItemComponent } from './auction-item/auction-item.component';
import { PromotionSiteComponent } from './promotion-site/promotion-site.component';
import { AuctionRoutingModule } from './auction-routing.module';
import { AddAuctionSiteComponent } from './add-auction-site/add-auction-site.component';
import { CartSiteComponent } from './cart-site/cart-site.component';
import { CartItemsSiteComponent } from './cart-items-site/cart-items-site.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AuctionSiteComponent,
    AuctionItemComponent,
    PromotionSiteComponent,
    AddAuctionSiteComponent,
    CartSiteComponent,
    CartItemsSiteComponent
  ],
  exports: [AuctionSiteComponent, PromotionSiteComponent, CartItemsSiteComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuctionRoutingModule
  ]
})
export class AuctionModule { }
