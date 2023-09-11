import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleCustomFormComponent } from './controle-custom-form.component';

describe('ControleCustomFormComponent', () => {
  let component: ControleCustomFormComponent;
  let fixture: ComponentFixture<ControleCustomFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControleCustomFormComponent]
    });
    fixture = TestBed.createComponent(ControleCustomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
