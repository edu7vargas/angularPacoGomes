import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PanelComponent } from './panel/panel.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';
import { EjercicioDetalleComponent } from './ejercicio-detalle/ejercicio-detalle.component';

const routes: Routes = [

  {path: 'ejercicios', component: EjerciciosComponent},
  {path: 'detalle/:id', component: EjercicioDetalleComponent },
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'panel', component: PanelComponent},
  {path: '', redirectTo: '/panel', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
