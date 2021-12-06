import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/clubes/interfaces/alumno.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-instructor',
  templateUrl: './home-instructor.component.html',
  styleUrls: ['./home-instructor.component.css']
})
export class HomeInstructorComponent implements OnInit {
  idInstructor: string= ""; 
  alumnos: Alumnos[] = [];
  alumnoDatos: Alumnos = {};
  nombreInstructor: string = "";
  mostrarVentana:boolean = false
  token: string = ""

  constructor( private authService: AuthService) { }
  
  ngOnInit(): void {    

    this.idInstructor = localStorage.getItem("id") || "";    
    this.nombreInstructor = localStorage.getItem("nombre") || "";
    this.token = localStorage.getItem("token") || "";
    
    this.authService.gAlumnosInstructor(Number(this.idInstructor), this.token)
      .subscribe( alumnos =>{
        console.log();
        
        this.alumnos = alumnos;        
      })
  }

  mostrar(alumno: Alumnos) {
    this.alumnoDatos = alumno;    
  }

}
