import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isLogged = false;

  constructor(private route: Router, private authService: AuthService) {

    this.isLogged = authService.isLoggedIn();

  }
  logOut() {
    this.authService.logout();
    this.route.navigate(['/login']);
  }

}
