import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionSiteComponent } from './promotion-site/promotion-site.component';
import { AuctionSiteComponent } from './auction-site/auction-site.component';
import { AddAuctionSiteComponent } from './add-auction-site/add-auction-site.component';
import { CartSiteComponent } from './cart-site/cart-site.component';

const routes: Routes = [
  { path: 'auctions', component: AuctionSiteComponent},
  { path: 'promotions', component: PromotionSiteComponent},
  { path: 'add-auction', component: AddAuctionSiteComponent},
  { path: 'cart', component: CartSiteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }

