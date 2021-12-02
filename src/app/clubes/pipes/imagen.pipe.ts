import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clubes } from '../interfaces/clubes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(club: Clubes, ...args: unknown[]): unknown {
    let baseUrl = "http://localhost/server/public";
    
    
    return baseUrl+""+ club.imagen;
  }

}
