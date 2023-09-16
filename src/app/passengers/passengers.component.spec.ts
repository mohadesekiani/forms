import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passengers } from './passemgers.component';

describe('Passengers', () => {
  let component: Passengers;
  let fixture: ComponentFixture<Passengers>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Passengers],
    });
    fixture = TestBed.createComponent(Passengers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
