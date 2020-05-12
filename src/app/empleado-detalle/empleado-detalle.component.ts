import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../interface/empleado';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent implements OnInit {
  @Input() empleadoItem: Empleado;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneEjercicio();
  }

  getOneEjercicio(): void{
    const id = this.route.snapshot.paramMap.get('id');
  }

}
