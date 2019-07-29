import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinimumGuard } from '../../guards/minimum.guard';
import { SharedModule  } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SomosComponent } from './components/somos/somos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'somos', component: SomosComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [
      MinimumGuard,
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    ContactoComponent,
    ProyectosComponent,
    SomosComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    HomeComponent,
    ContactoComponent,
    ProyectosComponent,
    SomosComponent
  ]
})
export class SiteModule { }
