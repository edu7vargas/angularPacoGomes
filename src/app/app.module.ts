import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { EjercicioDetalleComponent } from './ejercicio-detalle/ejercicio-detalle.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent,
    EjercicioDetalleComponent,
    EmpleadosComponent,
    EmpleadoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
