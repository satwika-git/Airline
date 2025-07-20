import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './userhome/userhome.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userhome', component: UserHomeComponent },
  { path: 'otp', component: OtpComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    
  ]
})
export class UserModule { }
