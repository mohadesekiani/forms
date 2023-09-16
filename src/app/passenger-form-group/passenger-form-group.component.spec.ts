import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerFormGroupComponent } from './passenger-form-group.component';

describe('PassengerFormGroupComponent', () => {
  let component: PassengerFormGroupComponent;
  let fixture: ComponentFixture<PassengerFormGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerFormGroupComponent]
    });
    fixture = TestBed.createComponent(PassengerFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
