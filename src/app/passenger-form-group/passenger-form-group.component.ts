import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-passenger-form-group',
  templateUrl: './passenger-form-group.component.html',
  styleUrls: ['./passenger-form-group.component.scss'],
})
export class PassengerFormGroupComponent {
  @Input() formGroupName = '';
  form!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
    let passengerForm = this.form.get(this.formGroupName);
    passengerForm?.get('adult')?.valueChanges.subscribe((value) => {
      passengerForm?.get('infant')?.setValidators(Validators.max(value));
      passengerForm?.get('infant')?.updateValueAndValidity({ onlySelf: true });
    });
  }
} //21 line
