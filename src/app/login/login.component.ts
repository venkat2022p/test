import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = {
    email: '',
    password: ''
  }
  constructor(private rt: Router, private user: UserService) { }

  ngOnInit() {

  }
  onRegister() {
    this.rt.navigate(['./signup'])
  }
  onSubmit() {
    if (this.model.email == 'user@gmail.com' && this.model.password == '123456') {

      localStorage.setItem("isLoggedIn", "true")

      this.rt.navigate(['./layout/dashboard'])

      alert('Login success');

    } else {

      localStorage.setItem("isLoggedIn", "false")
      
      alert("Login fail");

    }
  }
}
