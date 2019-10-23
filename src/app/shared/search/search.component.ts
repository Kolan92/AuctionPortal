import { Component, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounce, debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  template: `
  <div class="input-group mb-3">
    <div class="input-group-prepend" (click)="searchInput.focus()">
      <span class="input-group-text"><i class="fa fa-search"></i></span>
    </div>
    <input
      #searchInput
      type="text"
      name="title"
      class="form-control"
      [placeholder]="placeHolderTitle"
    />
  </div>
  `,
  styles: []
})

export class SearchComponent implements AfterViewInit {

  constructor() { }

  @Input()
  public placeHolderTitle = "Wyszukaj...";
  @Output()
  public whenSearch = new EventEmitter<string>();
  @ViewChild('searchInput', {static: false}) searchInputRef: ElementRef;

  ngAfterViewInit(): void {
    const searchInput = this.searchInputRef.nativeElement;
    fromEvent(searchInput, 'keyup')
      .pipe(
        map((ev: any) => ev.target.value),
        debounceTime(300),
        distinctUntilChanged())
      .subscribe(this.whenSearch);
  }
}
