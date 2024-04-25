import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreecoursesComponent } from './freecourses.component';

describe('FreecoursesComponent', () => {
  let component: FreecoursesComponent;
  let fixture: ComponentFixture<FreecoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreecoursesComponent]
    });
    fixture = TestBed.createComponent(FreecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
