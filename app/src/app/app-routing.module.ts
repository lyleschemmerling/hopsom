import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ManagerPage} from "./manager/manager.page";
import {SplashComponent} from "./manager/splash/splash.component";
import {UsersComponent} from "./manager/users/users.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manager',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
  },
  {
    path: 'manager',
    component: ManagerPage,
    loadChildren: () => import('./manager/manager.module').then(m => m.ManagerPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'session',
    loadChildren: () => import('./session/session.module').then( m => m.SessionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
