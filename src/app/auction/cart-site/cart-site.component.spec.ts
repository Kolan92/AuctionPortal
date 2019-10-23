import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSiteComponent } from './cart-site.component';

describe('CartSiteComponent', () => {
  let component: CartSiteComponent;
  let fixture: ComponentFixture<CartSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
