import { Component, OnInit } from '@angular/core';
import { EMPLEADOS } from '../data/collection-empleados';
import { Empleado } from '../interface/empleado';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor() { }
  listEmpleados = EMPLEADOS;
  empleadoSeleccionado: Empleado;


  ngOnInit(): void {
  }

  onSelectEmpleado(obj: Empleado):void{

    console.log("Empleado::: ",obj);
    this.empleadoSeleccionado = obj;

  }

}
