import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  miFormulario:FormGroup = this.fb.group({
    folio: [ ,[]],
    nombre: [ ,[]],
    apellidos: [ ,[]],
    carrera: [ ,[]],
    sexo: [ ,[]],
    edad: [ ,[]],
    telefono: [ ,[]],
    correo: [ ,[]],
    club_alternativo: [ ,[]],
    alergias: [ ,[]],
    situacion_medica: [ ,[]],
    clave_club: [ ,[]],
  })

  guardar(){
    
  }

}
