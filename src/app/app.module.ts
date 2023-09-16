import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControleCustomFormComponent } from './controle-custom-form/controle-custom-form.component';
import { Passengers } from './passengers/passengers.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PassengerFormGroupComponent } from './passenger-form-group/passenger-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ControleCustomFormComponent,
    Passengers,
    BasicInfoComponent,
    PassengerFormGroupComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
