import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbAlertComponent } from './ngb-alert/ngb-alert.component';
import { NgbDatepickerComponent } from './ngb-datepicker/ngb-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbAlertComponent,
    NgbDatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
