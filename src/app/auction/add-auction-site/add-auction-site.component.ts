import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../services/auction-service.service';
import { NgForm } from '@angular/forms';
import { AuctionItem } from '../Models/auction-item';

@Component({
  selector: 'ap-add-auction-site',
  templateUrl: './add-auction-site.component.html',
  styles: [
    `
  .ng-touched.ng-dirty.ng-invalid {
      border-color: darkred;
    }
    `
  ]
})
export class AddAuctionSiteComponent {

  public imgId = 1;
  constructor(private auctionService: AuctionService) { }

  public handleFormSubmit(form: NgForm): void {
    const auction = form.value as AuctionItem;
    auction.imgURL = `https://picsum.photos/id/${this.imgId}/200/200`;

    this.auctionService.addAuction(auction).subscribe(value => {
      form.reset();
      this.imgId = 1;
    });

  }


}
