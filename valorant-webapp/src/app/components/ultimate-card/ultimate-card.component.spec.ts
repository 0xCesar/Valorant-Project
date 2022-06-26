import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateCardComponent } from './ultimate-card.component';

describe('UltimateCardComponent', () => {
  let component: UltimateCardComponent;
  let fixture: ComponentFixture<UltimateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
