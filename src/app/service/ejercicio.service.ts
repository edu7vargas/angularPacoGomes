import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Ejercicio } from '../interface/ejercicio';
import { EJERCICIOS } from '../data/collection-ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }

  getEjercicios(): Observable<Ejercicio[]>{
    return of(EJERCICIOS);
  }

  getOneEjercicio(id: number): Observable<Ejercicio>{
    return of(EJERCICIOS.find(ejercicio => ejercicio.id === id));
  }
 // prueba 01
}
