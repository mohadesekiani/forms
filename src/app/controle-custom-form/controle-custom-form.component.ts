import { Component, Inject, INJECTOR, Injector } from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-controle-custom-form',
  templateUrl: './controle-custom-form.component.html',
  styleUrls: ['./controle-custom-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ControleCustomFormComponent,
      multi: true,
    },
  ],
})
export class ControleCustomFormComponent implements ControlValueAccessor {
  _control!: NgControl;

  constructor(@Inject(INJECTOR) private injector: Injector) {}

  ngOnInit() {
    this._control = this.injector.get(NgControl);
  }
  value: number = 0;
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
