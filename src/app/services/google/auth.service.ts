import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

declare var gapi;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser: Observable<firebase.User>

  constructor(public angularFireAuth: AngularFireAuth) {
    this.initClient();
    this.currentUser = angularFireAuth.authState
  }

  initClient() {
    gapi.load('client', () => {
      gapi.client.init({
        apiKey: 'AIzaSyDJMRjVa2osOkylQxlOs0mvlN6Mpjl-o3o',
        clientId: '596732568499-nbsnnurm61m98k0elsqqeghqiqocptt6.apps.googleusercontent.com',
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
    return this.currentUser
  }

  logoutUser() {
    this.angularFireAuth.auth.signOut();
  }
}
