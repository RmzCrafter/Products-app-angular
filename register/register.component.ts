import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  register() {
    this.afAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        console.log('You are registered');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.error('Registration failed: ', error);
      });
  }
}
