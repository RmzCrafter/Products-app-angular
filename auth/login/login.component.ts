import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        console.log('You are logged in');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Login failed: ', error);
      });
  }
}
