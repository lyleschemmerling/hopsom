import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SplashComponent} from "./splash/splash.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerPageRoutingModule {}
