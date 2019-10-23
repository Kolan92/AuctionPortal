import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsSiteComponent } from './cart-items-site.component';

describe('CartItemsSiteComponent', () => {
  let component: CartItemsSiteComponent;
  let fixture: ComponentFixture<CartItemsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemsSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
