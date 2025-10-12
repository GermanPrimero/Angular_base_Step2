import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exLevel4-task-manager-srvcs-mduls-commncation';
}
