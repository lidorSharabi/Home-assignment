import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AccountBalanceComponent } from './account-balance.component';

describe('AccountBalanceComponent', () => {
  let component: AccountBalanceComponent;
  let fixture: ComponentFixture<AccountBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountBalanceComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBalanceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show NOT balance', () => {
    component.currentBalance = undefined;
    fixture.detectChanges();
    const element: DebugElement = fixture.debugElement.query(By.css('.text-label'));
    expect(element).toBeFalsy();
  });

  it('should show balance', () => {
    component.currentBalance = 123;
    fixture.detectChanges();
    const element: DebugElement = fixture.debugElement.query(By.css('.text-label'));
    expect(element).toBeTruthy();
  });
});
