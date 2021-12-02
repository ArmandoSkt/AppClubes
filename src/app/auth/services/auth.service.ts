import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alumnos } from 'src/app/clubes/interfaces/alumno.interface';
import { Observable } from 'rxjs';
import { Instructores } from 'src/app/clubes/interfaces/instructor.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  private cuenta= {
    id:"",
    nombre: "",
    rol:"",
    token: ""
  }

  setCuenta(id:string, nombre:string, rol:string, token:string) {
    this.cuenta.id = id;
    this.cuenta.id = nombre;
    this.cuenta.id = rol;
    this.cuenta.id = token;

    localStorage.setItem("id", id);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("rol", rol);
    localStorage.setItem("token", token);
  }
  
  getCuenta() {
    this.cuenta.id = localStorage.getItem("id") || "";
    this.cuenta.nombre = localStorage.getItem("nombre") || "";
    this.cuenta.rol = localStorage.getItem("rol") || "";
    this.cuenta.token = localStorage.getItem("token") || "";
  }

  constructor(private http: HttpClient) { }

  login(id:string, pass:string) {
    return this.http.get(`${this.baseUrl}/login/${id}/${pass}`)
  }

  getAlumnosInstructor( id: number):Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(`${this.baseUrl}/alumnosClub/${id}`)
  }

  getInstructor( id: number):Observable<Instructores>{
    return this.http.get<Instructores>(`${this.baseUrl}/instructores/${id}`)
  }
}
