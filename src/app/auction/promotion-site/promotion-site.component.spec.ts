import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionSiteComponent } from './promotion-site.component';

describe('PromotionSiteComponent', () => {
  let component: PromotionSiteComponent;
  let fixture: ComponentFixture<PromotionSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
