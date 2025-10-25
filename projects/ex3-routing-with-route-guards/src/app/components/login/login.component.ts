import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  inputEmail: any;
  inputPassword: any;
  email:string = '';
  password:string = '';
  paragraph:any;
  messageOfError:string = '';


  constructor(private authService: AuthService, private route:Router) {}

  sendInfo(event: Event) {
    event.preventDefault(); // ✅ detiene el envío

    if(this.areInputsFilled()) {

      if(this.authService.checkUserEntered(this.email, this.password)) {
        this.authService.login();
        this.route.navigate(['\admin']);

      } else {
        this.messageOfError = "User not exists";
      }

    }

  }

  areInputsFilled() {

    let inputsFilled = true;

    if(this.email=="") {
      this.messageOfError += "Field email is empty || ";
      inputsFilled = false;
    }

    if(!this.email.includes("@")) {
      this.messageOfError += "email doesnt have @ || ";
      inputsFilled = false;
    }

    if(!this.email.includes(".")) {
      this.messageOfError += "email doesnt have . || ";
      inputsFilled = false;
    }

    if(this.password=="") {
      this.messageOfError +="password is empty || ";
      inputsFilled = false;
    }

    return inputsFilled;

  }

  
}
