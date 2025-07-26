import { Routes } from '@angular/router';
import { VistaprincipalComponent } from './vistaprincipal/vistaprincipal.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';

export const routes: Routes = [
    {path:'', component:VistaprincipalComponent, title:"vista principal"},
    {path: 'libreria', component:LibreriaComponent, title:"pedir libro"},
    {path: 'favoritos', component:FavoritosComponent, title: "Mis favoritos"}, 
    {path: 'micuenta', component:MiCuentaComponent, title:"Mi cuenta" }
];
