import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerPageRoutingModule } from './manager-routing.module';

import { ManagerPage } from './manager.page';
import {SplashComponent} from "./splash/splash.component";
import {UsersComponent} from "./users/users.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerPageRoutingModule
  ],
  declarations: [
    ManagerPage,
    SplashComponent,
    UsersComponent,
  ]
})
export class ManagerPageModule {}
