import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [

  {path: 'ejercicios', component: EjerciciosComponent},
  {path: 'empleados', component: EmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
