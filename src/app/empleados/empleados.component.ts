import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../service/empleado.service';
import { Empleado } from '../interface/empleado';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }
  listEmpleados: Empleado[];
  empleadoSeleccionado: Empleado;


  ngOnInit(): void {
    this.fn_listEmpleados();
  }

  fn_listEmpleados(){
    this.empleadoService.getEmpleados().subscribe(
      (result: any) => {
        this.listEmpleados = result;
      }
    );
  }
  onSelectEmpleado(obj: Empleado): void{

    console.log("Empleado::: ",obj);
    this.empleadoSeleccionado = obj;
  }

}
