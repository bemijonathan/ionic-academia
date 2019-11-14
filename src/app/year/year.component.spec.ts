import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearComponent } from './year.component';

describe('YearComponent', () => {
  let component: YearComponent;
  let fixture: ComponentFixture<YearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
