import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  template: ` <p>user-list works!</p> `,
  styles: `
  :host * {
      // display: block;
      margin-top: 30px;
    }
  `,
})
export class UserListComponent {}
