import { Component, OnInit } from '@angular/core';

import { Ejercicio } from '../interface/ejercicio';
import { EjercicioService } from '../service/ejercicio.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  listEjercicios: Ejercicio[];

  constructor(private ejercicioService: EjercicioService) { }

  ngOnInit(): void {
    this.fn_listEjercicios();
  }

  fn_listEjercicios(): void{

    this.ejercicioService.getEjercicios().subscribe(
      (result: any) => {
        this.listEjercicios = result.slice(1, 5);
        console.log(result);
      }
    );

  }

}
