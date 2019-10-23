import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[apHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background') bgColor = '';

  @HostListener('mouseover')
  mouseOver() {
    this.bgColor = '#80deea';
  }

  @HostListener('mouseout')
  mouseOut() {
    this.bgColor = '';
  }

}
