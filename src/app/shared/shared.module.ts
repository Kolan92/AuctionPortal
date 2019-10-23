import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlite.directive';



@NgModule({
  declarations: [HighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [ HighlightDirective]
})
export class SharedModule { }
