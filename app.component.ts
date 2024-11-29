import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, signOut } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Products-app';
  user: firebase.User | null = null;

  constructor(public afAuth: AngularFireAuth, private readonly router: Router) {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
