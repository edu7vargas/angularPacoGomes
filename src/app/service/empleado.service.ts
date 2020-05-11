import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Empleado } from '../interface/empleado';
import { EMPLEADOS } from '../data/collection-empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  getEmpleados(): Observable<Empleado[]>{
    return of(EMPLEADOS);
  }
}
