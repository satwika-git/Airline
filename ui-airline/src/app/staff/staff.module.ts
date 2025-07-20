import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: StaffhomeComponent },
];


@NgModule({
  declarations: [
    StaffhomeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class StaffModule { }
