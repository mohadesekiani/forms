import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  flightForm!: FormGroup;
  today = new Date();

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.flightForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
      }),
      passengers: this.fb.group({
        adult: [null, Validators.required],
        child: [null, Validators.required],
        infant: [null, Validators.required],
      }),
    });
  }
}
//mitone ro field bashe ya ro form.
// to baraye form zadi fek konam.
