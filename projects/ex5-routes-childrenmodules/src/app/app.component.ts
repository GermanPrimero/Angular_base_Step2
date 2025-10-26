import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <header>
  <h1>Welcome to {{title}}!</h1>
  <nav>
    <!-- FEEDBACK: when using routerLinkActive, define classname not booleans -->
     <!-- [routerLinkActiveOptions]="{ exact: true }" option that apply class activated
      only when the route is /. SOLVE PROBLEM: activated this link in other routes -->
    <a [routerLink]="'/'" routerLinkActive="activated" [routerLinkActiveOptions]="{ exact: true }">Home</a>
    <a [routerLink]="'users/list'" routerLinkActive="activated">Users</a>
    <a [routerLink]="'users/profile'" routerLinkActive="activated">UserProfile</a>
  </nav>
    </header>
    

    <router-outlet></router-outlet>
  `,
  styles: `
  
  nav {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .activated {
    color: red;
    text-decoration: underline;
  }
  `,
})
export class AppComponent {
  title = 'ex5-routes-childrenmodules';
}
