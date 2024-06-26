import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerItemComponent } from './best-seller-item.component';

describe('BestSellerItemComponent', () => {
  let component: BestSellerItemComponent;
  let fixture: ComponentFixture<BestSellerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellerItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestSellerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
