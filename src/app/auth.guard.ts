
import { Injectable } from '@angular/core';

import { CanActivate, CanDeactivate, Router } from '@angular/router';


@Injectable({

  providedIn: 'root'

})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {

    let issLoggedIn = localStorage.getItem("isLoggedIn")

    if (issLoggedIn == 'false') {

      this.router.navigate(['./login'])

      alert("Use not LoggedIn !!")

      return false
    }

    return true;

  }
}
