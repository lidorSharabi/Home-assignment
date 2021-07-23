import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('test customDateFormat function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    const customDate = new Date("07/23/2021");
    const dateFormatStr = component.customDateFormat(customDate);
    expect(dateFormatStr).toEqual("2021-07-23");
  });
});
