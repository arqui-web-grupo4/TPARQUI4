

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DescriptioncareerComponent } from './descriptioncareer/descriptioncareer.component';
import { VocationaltestComponent } from './vocationaltest/vocationaltest.component';
import { CitasComponent } from './citas/citas.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'',component:MainComponent},
    {path:'Carreras',component:DescriptioncareerComponent},
    {path:'Test',component:VocationaltestComponent},
    {path:'Citas',component:CitasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
