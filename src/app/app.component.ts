import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClubesService } from './clubes/services/clubes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor( private clubesService: ClubesService) {
    
  }
  // navegacionInstructores: boolean =  this.clubesService.navegacionInstructores;

  ngOnInit(): void {
    
  }


}
