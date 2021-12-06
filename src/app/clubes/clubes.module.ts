import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardClubComponent } from './components/card-club/card-club.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { NavbarInstructoresComponent } from './components/navbar-instructores/navbar-instructores.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent,
    NavbarComponent,
    CardClubComponent,
    ImagenPipe,
    FooterComponent,
    PresentacionComponent,
    NavbarInstructoresComponent,
    FormularioRegistroComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NavbarInstructoresComponent,
  ]
})
export class ClubesModule { }
