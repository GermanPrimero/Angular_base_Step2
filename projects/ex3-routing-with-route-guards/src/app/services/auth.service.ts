import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  users = [{email: 'user1@email.com', password: 'user1'}, {email: 'user2@email.com', password: 'user2'}]

  constructor() { }

  checkUserEntered(email: string, password: string) {

    let existUser = false;

    this.users.filter((user=>{
      if(user.email == email && user.password == password) {
        existUser = true;
        return true;
      } else {
        return false;
      }
    }))

    return existUser ? true: false;

  }

  login() {
    this.isAuthenticated = true;

  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn() {
    return (this.isAuthenticated) ? true: false;
  }
}
