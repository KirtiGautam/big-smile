import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModalPage } from './card-modal.page';

describe('CardModalPage', () => {
  let component: CardModalPage;
  let fixture: ComponentFixture<CardModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
