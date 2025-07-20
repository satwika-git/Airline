import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './user/login/login.component';
import { StaffhomeComponent } from './staff/staffhome/staffhome.component';

const routes: Routes = [

  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'staff', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) },
  { path: 'staff/home', component: StaffhomeComponent },
  { path: '**', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }