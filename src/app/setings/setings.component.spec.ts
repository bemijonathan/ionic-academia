import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetingsComponent } from './setings.component';

describe('SetingsComponent', () => {
  let component: SetingsComponent;
  let fixture: ComponentFixture<SetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetingsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
