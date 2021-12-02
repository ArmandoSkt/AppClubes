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
  nombre: string ="";
  mostrarVentana:boolean = false

  constructor( private authService: AuthService) { }
  
  ngOnInit(): void {    

    this.idInstructor = localStorage.getItem("id") || "";    

    this.authService.getInstructor(Number(this.idInstructor))
    .subscribe( instructor => {
      this.nombre = instructor.nombre || "";
    })

    this.authService.getAlumnosInstructor(Number(this.idInstructor))
      .subscribe( alumnos =>{
        console.log();
        
        this.alumnos = alumnos;        
      })
  }

  mostrar(alumno: Alumnos) {
    this.alumnoDatos = alumno;
    
  }

}
