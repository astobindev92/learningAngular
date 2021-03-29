import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarrasDobleComponent } from './paginas/barras-doble/barras-doble.component';
import { BarrasComponent } from './paginas/barras/barras.component';
import { DonaHttpComponent } from './paginas/dona-http/dona-http.component';
import { DonaComponent } from './paginas/dona/dona.component';

const routes: Routes = [
  {path:'barra',component:BarrasComponent},
  {path:'barra-doble',component:BarrasDobleComponent},
  {path:'dona',component:DonaComponent},
  {path:'dona-http',component:DonaHttpComponent},
  {path:'**', redirectTo:'barra'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
