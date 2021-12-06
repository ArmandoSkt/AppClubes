import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/shared/Validator/validator.service';
import { Alumnos } from '../../interfaces/alumno.interface';
import { Clubes } from '../../interfaces/clubes.interface';
import { ClubesService } from '../../services/clubes.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  clubes: Clubes[] = []

  mostrarAlerta: boolean = false;
  
  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private clubesService: ClubesService,
              private validatorService: ValidatorService,
              private msg: ToastrService) { }

  ngOnInit(): void {

    this.miFormulario.valueChanges.subscribe()

    this.clubesService.getClubes()
    .subscribe( clubes => {
      this.clubes = clubes;  
    })   
  }

  miFormulario:FormGroup = this.fb.group({
    folio: [ ,[Validators.required, Validators.pattern(this.validatorService.folio)]],
    nombre: [ "",[Validators.required, Validators.pattern(this.validatorService.nombre)]],
    apellidos: [ "" ,[Validators.required, Validators.pattern(this.validatorService.apellidos)]],
    carrera: [ "",[Validators.required]],
    sexo: ["" ,[Validators.required]],
    edad: [ 18,[Validators.required]],
    telefono: [ "",[Validators.required, Validators.pattern(this.validatorService.telefono)]],
    correo: ["" ,[Validators.required, Validators.pattern(this.validatorService.correo)]],
    club_alternativo: ["" ,[Validators.required]],
    alergias: [ "",[ Validators.pattern(this.validatorService.alergia)]],
    situacion_medica: ["" ,[]],
    clave_club: [ ,[Validators.required]],
  });

  campoNoValido( campo:string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  campoValido( campo:string ){
    if(this.miFormulario.get(campo)?.errors == null){
      return 'formulario__grupo formulario__grupo-correcto'
    }else {
      return ""
    }
  }


  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      this.mostrarAlerta = true;
      return;
    }

    console.log(this.miFormulario.value);
    const alumno = {  ...this.miFormulario.value }
    alumno.folio = Number(alumno.folio)
    alumno.edad = Number(alumno.edad)
    alumno.clave_club = Number(alumno.clave_club)
    alumno.nombre = alumno.nombre.toUpperCase();
    alumno.apellidos = alumno.apellidos.toUpperCase();
    alumno.alergias = alumno.alergias.toUpperCase();
    alumno.situacion_medica = alumno.situacion_medica.toUpperCase();
    
    this.clubesService.agregarAlumno(alumno)
        .subscribe(alumno => {
          this.msg.success("<h4>Registro exitoso</h4>")     
          this.miFormulario.reset();     
          this.mostrarAlerta = false;                    
        }, err=> {
          this.msg.error("<h4>Error de registro</h4>")         
        })
  }
}


// alumno: Alumnos= {
//   folio: 2010,
//   nombre: "CESAR",
//   apellidos: "ALVAREZ",
//   carrera: "INGENIERÍA INDUSTRIAL",
//   sexo: "M",
//   edad: 21,
//   telefono: "7861078822",
//   correo: "CESAR@GMAIL.COM",
//   club_alternativo: "AJEDREZ",
//   alergias: "NO",
//   situacion_medica: "NO",
//   clave_club: 1,
// }