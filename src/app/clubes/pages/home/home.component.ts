import { Component, OnInit } from '@angular/core';
import { Clubes } from '../../interfaces/clubes.interface';
import { ClubesService } from '../../services/clubes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clubesDeportivos: Clubes[] = []
  clubesCulturales: Clubes[] = []
  clubesAcademicos: Clubes[] = []
  // baseUrl = environment.baseUrl;
  constructor( private clubesService: ClubesService) { }

  ngOnInit(): void {
    this.clubesService.getClubesDeportivos()
    .subscribe( clubesDeportivos => {
      this.clubesDeportivos = clubesDeportivos;
      // console.log(this.clubes);      
    });
    this.clubesService.getClubesCultural()
    .subscribe( clubesCulturales => {
      this.clubesCulturales = clubesCulturales;
      // console.log(this.clubes);      
    });
    this.clubesService.getClubesAcademico()
    .subscribe( clubesAcademicos => {
      this.clubesAcademicos = clubesAcademicos;
      // console.log(this.clubes);      
    });
  }

}
