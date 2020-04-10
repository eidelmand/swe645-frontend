import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAcknowledgementComponent } from './simple-acknowledgement.component';

describe('SimpleAcknowledgementComponent', () => {
  let component: SimpleAcknowledgementComponent;
  let fixture: ComponentFixture<SimpleAcknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAcknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
