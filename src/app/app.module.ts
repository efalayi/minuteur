import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TimerComponent } from './components/timer/timer.component';
import { ImportEventsButtonComponent } from './components/import-events-button/import-events-button.component';

import { ConvertToDoubleDigitsPipe  } from './formatters/convert-to-double-digits.pipe';
import { ConvertMaxToZero } from './formatters/convert-max-to-zero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImportEventsButtonComponent,
    TaskComponent,
    TimerComponent,
    ConvertMaxToZero,
    ConvertToDoubleDigitsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
