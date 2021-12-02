import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './clubes/pages/home/home.component';
import { RegistroComponent } from './clubes/pages/registro/registro.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { PresentacionComponent } from './clubes/pages/presentacion/presentacion.component';
import { HomeInstructorComponent } from './auth/pages/home-instructor/home-instructor.component';
import { HomeAdminComponent } from './auth/pages/home-admin/home-admin.component';

const rutas: Routes = [
  {
    path: "",
    component: HomeComponent    
  },
  {
    path: "presentacion/:id",
    component: PresentacionComponent  
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "instructor",
    component: HomeInstructorComponent
  },
  {
    path: "admin",
    component: HomeAdminComponent
  },
  {
    path:"**",
    redirectTo:""
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
