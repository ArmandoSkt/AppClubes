import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr'
import { ClubesService } from 'src/app/clubes/services/clubes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: string="";
  pwd: string="";

  constructor( private router: Router,
              private authService: AuthService,
              private msg: ToastrService,
              private clubesService: ClubesService) { }

  ngOnInit(): void {
  }

  login( ) {
    this.authService.login(this.id, this.pwd)
      .subscribe(
        (resp:any) => {
          this.authService.setCuenta(resp.id.id, resp.id.rol, resp.id.nombre, resp.token)
          console.log(resp);
          
          this.msg.success("Usuario correcto")
          if(resp.id.rol == "A"){
            this.clubesService.navegacionInstructores = false                   
            console.log(this.clubesService.navegacionInstructores);
            this.router.navigate(["/admin"]) 
          }else {
            this.clubesService.navegacionInstructores = false    
            console.log(this.clubesService.navegacionInstructores);
                           
            this.router.navigate(["/instructor"])          
          }
          
        }, err => {
          this.msg.error("Usuario o contraseña incorrectos")
          
        }
      )
  }  

}
