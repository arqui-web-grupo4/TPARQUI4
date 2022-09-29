import { SharedModule } from './../shared/shared.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { DescriptioncareerComponent } from './descriptioncareer/descriptioncareer.component';
import { VocationaltestComponent } from './vocationaltest/vocationaltest.component';
import { CitasComponent } from './citas/citas.component';
import { NuevosComponent } from './nuevos/nuevos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    MainComponent,
    DescriptioncareerComponent,
    VocationaltestComponent,
    CitasComponent,
    NuevosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
