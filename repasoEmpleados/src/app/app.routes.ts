import { Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './componentes/listar-empleados/listar-empleados.component';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { EliminarEmpleadoComponent } from './componentes/eliminar-empleado/eliminar-empleado.component';
import { ActualizarComponent  } from './componentes/actualizar/actualizar.component'; 
import { Component } from '@angular/core';
import { EditarComponent } from './componentes/editar/editar.component';


export const routes: Routes = [
    {path: 'listar', component: ListarEmpleadosComponent},
    {path:'agregar', component: AgregarEmpleadoComponent}, 
    {path: 'consulta/:id', component: ConsultaComponent}, 
    {path: 'eliminar', component: EliminarEmpleadoComponent}, 
    {path: 'actualizar', component: ActualizarComponent}, 
    {path: 'editar/:id', component: EditarComponent}, 
    {path: '', redirectTo:'listar', pathMatch:'full'}, 
    {path: '**', redirectTo: 'listar'} //para rutas inválidas 
    
];
