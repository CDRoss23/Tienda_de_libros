import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPopupComponent } from './card-popup.component';

describe('CardPopupComponent', () => {
  let component: CardPopupComponent;
  let fixture: ComponentFixture<CardPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
