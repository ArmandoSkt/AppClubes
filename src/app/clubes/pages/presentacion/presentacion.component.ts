import { Component, Input, OnInit } from '@angular/core';
import { Clubes } from '../../interfaces/clubes.interface';
import { ClubesService } from '../../services/clubes.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  club: Clubes ={
    nombre: "",
    instructor: ""
  }
   
  constructor( private clubesService: ClubesService,
              private _sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(      
        switchMap(({ id }) => this.clubesService.getClubePorId(id))
      )
      .subscribe( club => {
        this.club = club[0];        
        console.log(this.club);
        
      })
  }

  getVideoIframe(url:string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}


}
