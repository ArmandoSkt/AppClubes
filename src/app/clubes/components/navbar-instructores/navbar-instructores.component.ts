import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-instructores',
  templateUrl: './navbar-instructores.component.html',
  styleUrls: ['./navbar-instructores.component.css']
})
export class NavbarInstructoresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salir(){
    this.router.navigate(["/"])
    // this.clubesService.navegacionInstructores = true;
  }

}
