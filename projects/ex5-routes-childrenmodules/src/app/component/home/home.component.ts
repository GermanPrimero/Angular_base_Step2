import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  template: ` <p>home works!</p> `,
  styles: `
    :host * {
      // display: block;
      margin-top: 30px;
    }
  `,
})
export class HomeComponent {}
