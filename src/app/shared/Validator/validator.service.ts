import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public folio: string = "^[0-9]{4}$";
  public nombre: string = "^[a-zA-ZÀ-ÿ\s]{1,40}$"; // Letras y espacios, pueden llevar acentos.
  public apellidos: string = "^[a-zA-ZÀ-ÿ\s ]{1,40}$"; // Letras y espacios, pueden llevar acentos.
  public telefono: string = "^[0-9]{10}$"; // 10 numeros.
  public correo: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  public direccion: string = "^[a-zA-ZÀ-ÿ\s0-9#/.]{1,40}"; // Letras y espacios, pueden llevar acentos.
  public alergia: string = "^[a-zA-ZÀ-ÿ\s0-9]{0,100}$";
  public situacionMedica: string = "^[a-zA-ZÀ-ÿ\s0-9]{1,100}$";
  constructor() { }
}
