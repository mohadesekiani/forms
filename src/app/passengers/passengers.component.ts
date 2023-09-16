import { Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Passengers,
      multi: true,
    },
  ],
})
export class Passengers implements ControlValueAccessor {
  form!: FormGroup;
  value: number = 0;
  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

  onChange!: (value: number) => void;
  onTouch!: (value: number) => void;
  writeValue(obj: number): void {
    // console.log('obj=>', obj); مقدار اولیه که در ریعکتیو فرم ثبت کردی
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    // اطلاع ب کنترل که مقدارم تغییر کرده
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
  increase() {
    this.value = this.value + 1;
    this.onChange(this.value);
    this.onTouch(this.value);
  }
  changeHandler(e: any) {
    let newValue = e.target.value;
    this.value = +newValue;
    this.onChange(this.value);
    this.onTouch(this.value);
  }
}

//ye hamchin chizi
{
  required: () => {
    return 'ejbariye';
  };
  max: ({ max, actual }) => {
    return (
      'adad bozoorg tar az ' + max + 'ast bayad kamtar az ' + actual + 'bashad'
    );
  };
  custom: ({ x, y, z, gg, ee, f }) => ''; //azadi har chi bedi to error yadete? inja gg mishe 34
  //ziba nis?ooooom chizi ke inje return mishe khoro jiye pipe ya directivet mishe...
  //albate aval best practice search kon 10 20 ta age naboood khodet bezan ye vaqt charkh ekhtera nakoni mesle alane man...
  // ehtemalan zadan az qabl
  //ok ,mrc
  // alan dark kardi error roye har field ro?

  x: () => '';
  x2: () => '';
  x3: () => '';
  x4: () => '';
  y: () => '';
  x: () => '';
  x: () => '';
}
