import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TimerComponent } from './components/timer/timer.component';
import { ImportEventsButtonComponent } from './components/import-events-button/import-events-button.component';

import { ConvertToDoubleDigitsPipe } from './formatters/convert-to-double-digits.pipe';
import { ConvertMaxToZero } from './formatters/convert-max-to-zero.pipe';
import { environment } from '../environments/environment';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule
      ],
      declarations: [
        AppComponent,
        ImportEventsButtonComponent,
        TaskComponent,
        TimerComponent,
        ConvertMaxToZero,
        ConvertToDoubleDigitsPipe
      ],
    }).compileComponents();

    window['gapi'] = {
      load() {
        return null;
      },
      anotherFunction() {
        return null;
      }
    }
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Minuteur'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Minuteur');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Minuteur!');
  });
});
