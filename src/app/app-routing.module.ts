import { RegistroComponent } from './components/registro/registro.component';
import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"login", component: RegistroComponent},
  {path:'dashboard', loadChildren: () =>import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path:'**',redirectTo:'login',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
