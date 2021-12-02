import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { LoginComponent } from './pages/login/login.component';
import { HomeInstructorComponent } from './pages/home-instructor/home-instructor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeInstructorComponent,
    HomeAdminComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    LoginComponent,
  ]
})
export class AuthModule { }
