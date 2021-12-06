import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alumnos } from 'src/app/clubes/interfaces/alumno.interface';
import { Observable } from 'rxjs';
import { Instructores } from 'src/app/clubes/interfaces/instructor.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private baseUrl: string = environment.baseUrl;
  private baseUrl: string = "http://localhost/server/public";

  private cuenta= {
    id:"",
    usuario:"",
    nombre: "",
    rol:"",
    token: ""
  }

  setCuenta(id: string, usuario: string, nombre:string, rol:string, token:string) {
    this.cuenta.id = id;
    this.cuenta.usuario = usuario;
    this.cuenta.nombre = nombre;
    this.cuenta.rol = rol;
    this.cuenta.token = token;

    localStorage.setItem("id", id);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("rol", rol);
    localStorage.setItem("token", token);
  }
  
  getCuenta() {
    this.cuenta.id = localStorage.getItem("id") || "";
    this.cuenta.usuario = localStorage.getItem("usuario") || "";
    this.cuenta.nombre = localStorage.getItem("nombre") || "";
    this.cuenta.rol = localStorage.getItem("rol") || "";
    this.cuenta.token = localStorage.getItem("token") || "";
  }

  constructor(private http: HttpClient) { }

  login(id:string, pass:string) {
    return this.http.get(`${this.baseUrl}/login/${id}/${pass}`)
  }
  gAlumnosInstructor(id: number, token: string):Observable<Alumnos[]>{
    let headers = new HttpHeaders;
    headers = headers.append("Authorization", token)
    
    return this.http.get<Alumnos[]>(`${this.baseUrl}/alumnosClub/${id}`, {headers: headers})
  }

  getAlumnosInstructor( id: number):Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(`${this.baseUrl}/alumnosClub/${id}`)
  }

  getInstructor( id: number):Observable<Instructores>{
    return this.http.get<Instructores>(`${this.baseUrl}/instructores/${id}`)
  }
}
