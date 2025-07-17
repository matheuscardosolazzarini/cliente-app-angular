// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component'; 
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/novo', component: ClienteFormComponent},
  { path: 'clientes/editar/:id', component: ClienteFormComponent},
  { path: 'clientes/:id', component: ClienteDetailComponent }
];