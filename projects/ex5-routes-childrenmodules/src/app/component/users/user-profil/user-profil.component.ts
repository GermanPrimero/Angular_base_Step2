import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  standalone: false,
  template: ` <p>user-profil works!</p> `,
  styles: `
  
  :host * {
      // display: block;
      margin-top: 30px;
    }
    `,
})
export class UserProfilComponent {}
