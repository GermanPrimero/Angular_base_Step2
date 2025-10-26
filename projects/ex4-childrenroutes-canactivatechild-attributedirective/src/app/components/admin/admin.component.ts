import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,
  template: `
    <h2>Admin Panel</h2>
    <nav>
      <a [routerLink]="['dashboard']">Dashboard</a>
      <a [routerLink]="['settings']">Settings</a>
    </nav>
    <router-outlet></router-outlet>
    <a [routerLink]="['']">Go back to Home</a>
  `,
  styles: ``
})
export class AdminComponent {

}
