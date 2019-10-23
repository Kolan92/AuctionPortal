import { Injectable } from '@angular/core';
import { AuctionItem } from '../Models/auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private baseUrl = "http://localhost:3000";
  private auctionUrl = `${this.baseUrl}/auctions`;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<AuctionItem[]> {

    return this.httpClient.get<AuctionItem[]>(this.auctionUrl);
  }

  public addAuction(newAuction: AuctionItem): Observable<AuctionItem> {

    return this.httpClient.post<AuctionItem>(this.auctionUrl, newAuction);

  }
}
