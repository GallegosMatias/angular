// Importar Modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componentes
import { MessiComponent } from './messi/messi.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

// Array de rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'messi', component: MessiComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent}
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
