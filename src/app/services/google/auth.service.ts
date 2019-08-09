import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { environment } from '../../../environments/environment'

declare var gapi;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser: object = {}
  currentUser$: Observable<firebase.User>

  constructor(public angularFireAuth: AngularFireAuth) {
    this.initClient();
    this.currentUser$ = angularFireAuth.authState;
  }

  initClient() {
    gapi.load('client', () => {
      gapi.client.init({
        apiKey: environment.firebase.apiKey,
        clientId: environment.clientId,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.readonly'
      })
      gapi.client.load('calendar', 'v3')
    })
  }

  async authenticateUser() {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const token = googleUser.getAuthResponse().id_token;
    const credential = auth.GoogleAuthProvider.credential(token);
    await this.angularFireAuth.auth.signInAndRetrieveDataWithCredential(credential);
  }

  getCurrentUser() {
    this.currentUser$.subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }

  logoutUser() {
    this.angularFireAuth.auth.signOut();
  }
}
