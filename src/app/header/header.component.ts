import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styles: [`
    header {
      background: url('https://picsum.photos/id/180/2000/400') no-repeat;
    }
    h1{
      color: white
    }
  `]
})
export class HeaderComponent implements OnInit {
  public title = 'Auction Portal';

  constructor() { }

  ngOnInit() {
  }

}
