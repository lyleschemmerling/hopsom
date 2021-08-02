import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loggedIn: Observable<boolean>

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
  }

  async logIn(): Promise<void> {
    this.authService.setLoggedIn(true);
    await this.router.navigate([''])
  }

  logOut(): void {
    this.authService.setLoggedIn(false);
  }
}
