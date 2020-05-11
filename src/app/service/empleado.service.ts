import { Injectable } from '@angular/core';
import { Empleado } from '../interface/empleado';
import { EMPLEADOS } from '../data/collection-empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  getEmpleados(): Empleado[]{
    return EMPLEADOS;
  }
}
