import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflightscheduleComponent } from './addflightschedule.component';

describe('AddflightscheduleComponent', () => {
  let component: AddflightscheduleComponent;
  let fixture: ComponentFixture<AddflightscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddflightscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddflightscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
