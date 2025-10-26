import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  template: `
    <p>Dashboard content here</p>
<a [routerLink]="['/admin']">Go back to Admin</a>
  `,
  styles: ``
})
export class DashboardComponent {

}
