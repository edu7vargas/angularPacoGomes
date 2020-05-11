import { Component, OnInit } from '@angular/core';

import { Ejercicio } from '../interface/ejercicio';
import { EjercicioService } from '../service/ejercicio.service';

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

listEjercicios: Ejercicio[];
ejercicioSeleccionado: Ejercicio;


  constructor(private ejercicioService: EjercicioService) { }

  fn_listEjercicios(): void{

    this.ejercicioService.getEjercicios().subscribe(
      listEjercicios => this.listEjercicios = listEjercicios
    );

  }

  ngOnInit(): void {
    this.fn_listEjercicios();
  }

  onSelectEjercicio(obj: Ejercicio):void{
    console.log('ingreso a ',obj);
    this.ejercicioSeleccionado = obj;

  }

}
