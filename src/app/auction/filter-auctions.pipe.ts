import { Pipe, PipeTransform } from '@angular/core';
import { AuctionItem } from './Models/auction-item';

@Pipe({
  name: 'filterAuctions'
})
export class FilterAuctionsPipe implements PipeTransform {

  transform(value: AuctionItem[], filterTitle = ''): AuctionItem[] {

    if (!filterTitle) {
      return value;
    }
    const filterInLower = filterTitle.toLowerCase();
    return value.filter(a => a.title.toLowerCase().includes(filterInLower));
  }

}
