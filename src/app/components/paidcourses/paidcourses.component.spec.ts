import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidcoursesComponent } from './paidcourses.component';

describe('PaidcoursesComponent', () => {
  let component: PaidcoursesComponent;
  let fixture: ComponentFixture<PaidcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaidcoursesComponent]
    });
    fixture = TestBed.createComponent(PaidcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
