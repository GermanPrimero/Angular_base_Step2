import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: false,
  template: `
    <p>Settings page content</p>
    <a [routerLink]="['/admin']">Go back to Admin</a>

  `,
  styles: ``
})
export class SettingsComponent {

}
