import { Injectable } from '@angular/core';
import { Ejercicio } from '../interface/ejercicio';
import { EJERCICIOS } from '../data/collection-ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }

  getEjercicios(): Ejercicio[]{
    return EJERCICIOS;
  }
}
