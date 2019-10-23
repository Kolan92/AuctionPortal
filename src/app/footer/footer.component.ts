import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-footer',
  template: `
  {{valueDate | date: 'dd.MM.yyyy HH:mm'}}

  <footer>
    <p>footer works!</p>
    <!--<i class="fas fa-tachometer-alt fa-10x"></i>-->
    <!--<i class="fas fa-taxi fa-10x"></i>-->
  </footer>
  `,
  styles: [`
  i[class^='fa'] {
    color: var(--main-txt-color);
    background-color: var(--main-bg-color);
    height: var(--main-size);
    width: var(--main-size);
  }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }
  valueDate = Date.now();

  ngOnInit() {
  }

}
