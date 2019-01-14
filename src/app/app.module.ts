import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TimerComponent } from './components/timer/timer.component';

import { ConvertToDoubleDigitsPipe  } from './formatters/convert-to-double-digits.pipe'
import { ConvertMaxToZero } from './formatters/convert-max-to-zero.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TimerComponent,
    ConvertMaxToZero,
    ConvertToDoubleDigitsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
