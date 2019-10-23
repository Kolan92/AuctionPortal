import { Component, OnInit } from '@angular/core';

interface MenuItem {
  href: string;
  title: string;
}

@Component({
  selector: 'ap-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public menuItems: MenuItem[] = [
    {href: 'auctions', title: 'Aukcje'},
    {href: 'promotions', title: 'Promocje'},
    {href: 'advices', title: 'Podpowiadamy'}
  ];

  public toggleMenu = false;

  constructor() { }

  ngOnInit() {
  }

}
