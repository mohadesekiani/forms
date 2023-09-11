import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  submitted: boolean = false;
  form = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    custom: new FormControl(null),
  });
  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    this.submitted = true;
    // console.warn(this.form.value);
  }
}
