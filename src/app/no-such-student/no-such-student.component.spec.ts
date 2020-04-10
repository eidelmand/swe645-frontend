import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSuchStudentComponent } from './no-such-student.component';

describe('NoSuchStudentComponent', () => {
  let component: NoSuchStudentComponent;
  let fixture: ComponentFixture<NoSuchStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSuchStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSuchStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
