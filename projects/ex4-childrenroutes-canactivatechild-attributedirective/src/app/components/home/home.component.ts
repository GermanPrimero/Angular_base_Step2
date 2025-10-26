import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <h2 appHighlight>Welcome to the Home Page!</h2>
    <a routerLink="/admin">Go to Admin</a>

    @if(authService.isLoggedIn()) {
    <button class="btn-logout" (click)="logOut()">Logout</button>
    } @else {
    <button class="btn-login" (click)="logIn()">Login</button>
    }
  `,
  styles: `
  h2 {
    width: max-content;
  }
  .btn-login {
    display: block;
color: white;
background-color: blue;
padding: 10px;
border: none;
border-radius: 7px;
  }

  .btn-logout {
    display: block;
    color: white;
    background-color: red;
    padding: 10px;
    border: none;
border-radius: 7px;
  }
  `,
})
export class HomeComponent {
  // isLogged = false;
  authService = inject(AuthService);
  constructor(private router: Router) {}

  logIn() {
    this.authService.login();
    // this.isLogged = true;
    this.router.navigate(['/admin/dashboard']);
  }

  logOut() {
    this.authService.logout();
    // this.isLogged = false;
    this.router.navigate(['']);
  }
}
