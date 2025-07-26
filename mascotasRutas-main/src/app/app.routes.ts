import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, title:'Home'},
    {path: 'pet/id', component:HomeComponent},
    {path:'**', component:NotFoundComponent, title:'Not Found'}
    
];
