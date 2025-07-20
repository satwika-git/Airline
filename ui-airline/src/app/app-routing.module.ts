import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
<<<<<<< HEAD
   { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
   { path: 'staff', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) },
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/staff' }
=======

  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: 'landing' }
>>>>>>> 887ef15e32924c5342f6141e9b8e90f4fc12aacb
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }