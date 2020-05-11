import { Component, OnInit } from '@angular/core';

import { Ejercicio } from '../interface/ejercicio';
import { EJERCICIOS } from '../data/collection-ejercicios';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

objEjercicio: Ejercicio = {
    id: 1,
    name: "Flexiones"
 };

listEjercicios = EJERCICIOS;
ejercicioSeleccionado: Ejercicio;


  constructor() { }

  ngOnInit(): void {

  }

  onSelectEjercicio(obj: Ejercicio):void{
    console.log('ingreso a ',obj);
    this.ejercicioSeleccionado = obj;

  }

}
