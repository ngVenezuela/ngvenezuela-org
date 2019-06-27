import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SomosComponent } from './somos/somos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
	{
		path:'home',
		component: HomeComponent
	},
	{
		path:'somos',
		component: SomosComponent
	},
	{
		path:'proyectos',
		component: ProyectosComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
