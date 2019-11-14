import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqComponent } from './mcq.component';

describe('McqComponent', () => {
  let component: McqComponent;
  let fixture: ComponentFixture<McqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
