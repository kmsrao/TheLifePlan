import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipinvestmentComponent } from './sipinvestment.component';

describe('SipinvestmentComponent', () => {
  let component: SipinvestmentComponent;
  let fixture: ComponentFixture<SipinvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipinvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SipinvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
