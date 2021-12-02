import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clubes } from '../interfaces/clubes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubesService {

  private baseUrl: string = environment.baseUrl;

  navegacionInstructores: boolean = true;

  constructor(private http: HttpClient) { }

  getClubes(): Observable<Clubes[]>{
    return this.http.get<Clubes[]>(`${this.baseUrl}/clubes`);
  }

  getClubesDeportivos(): Observable<Clubes[]>{
    return this.http.get<Clubes[]>(`${this.baseUrl}/deportivo`);
  }

  getClubesCultural(): Observable<Clubes[]>{
    return this.http.get<Clubes[]>(`${this.baseUrl}/cultural`);
  }

  getClubesAcademico(): Observable<Clubes[]>{
    return this.http.get<Clubes[]>(`${this.baseUrl}/academico`);
  }

  getClubePorId( id: string): Observable<Clubes[]>{
    return this.http.get<Clubes[]>(`${this.baseUrl}/clubes/${id}`);
  }
}
