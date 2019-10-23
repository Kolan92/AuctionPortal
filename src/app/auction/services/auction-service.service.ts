import { Injectable } from '@angular/core';
import { AuctionItem } from '../Models/auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<AuctionItem[]> {

      return this.httpClient.get<AuctionItem[]>("http://localhost:3000/auctions");
    }
  }
