import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Ejercicio } from '../interface/ejercicio';
import { EjercicioService } from '../service/ejercicio.service';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {

  ejercicioItem: Ejercicio;

  constructor(private route: ActivatedRoute,
    private ejercicioService: EjercicioService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getOneEjercicio();
  }

  getOneEjercicio(): void{
    const id =+ this.route.snapshot.paramMap.get('id');

    this.ejercicioService.getOneEjercicio(id).subscribe(
      (result: any) => {
        this.ejercicioItem = result;
      }
    );
    //debugger;
  }


  goBack():void{
    this.location.back();

  }



}
