import { Injectable } from '@angular/core';
import { AuctionItem } from '../Models/auction-item';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {

  private items = new BehaviorSubject<AuctionItem[]>([]);

  public getItems(): Observable<AuctionItem[]> {
    return this.items.asObservable();
  }

  public addItem(newItem: AuctionItem): void {
    const auctions = this.items.getValue();
    auctions.push(newItem);
    this.items.next(auctions);
  }

  public countItems(): Observable<number> {
    return this.items.pipe(map(arr => arr.length));
  }

}
