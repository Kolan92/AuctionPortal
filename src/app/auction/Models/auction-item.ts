export interface AuctionItem {
  id: number;
  title: string;
  imgURL: string;
  description: string;
  price: number;
  isPromoted?: boolean;
}
