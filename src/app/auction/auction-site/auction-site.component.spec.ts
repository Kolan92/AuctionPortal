import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionSiteComponent } from './auction-site.component';

describe('AuctionSiteComponent', () => {
  let component: AuctionSiteComponent;
  let fixture: ComponentFixture<AuctionSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
