import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../interface/empleado';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent implements OnInit {
  @Input() empleadoItem: Empleado;
  constructor() { }

  ngOnInit(): void {
  }

}
