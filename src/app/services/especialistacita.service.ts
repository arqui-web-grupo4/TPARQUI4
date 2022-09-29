import { Injectable } from '@angular/core';
import { especialista } from '../models/especialistacita';

@Injectable({
  providedIn: 'root'
})
export class EspecialistacitaService {
  listaespecialista: especialista[] = [
    
    {aula:"ax51", name: 'Emigdio Paniagua Guijarro', area:"Ingeniería química" ,estado: '10:00-11:00'},
    {aula:"ax52", name: 'Carina Romeu Ruano', area:"Ingeniería mecánica y metalurgia" ,estado: '08:00-09:00'},
    {aula:"ax53", name: 'Francisco Javier', area:"Ciencias ambientales" ,estado: '10:00-11:00'},
    {aula:"ax54", name: 'Eutropio Moya Marí', area:"Física" ,estado: '13:00-14:00'},
    {aula:"ax55", name: 'Maximiliano Lledó Salom', area:"Lenguas extranjeras" ,estado: '18:00-19:00'},
    {aula:"ax56", name: 'Baltasar Castellanos Osuna', area:"Medicina" ,estado: '11:00-12:00'},
    {aula:"ax57", name: 'Yaiza Batlle Soriano', area:"Veterinaria" ,estado: '9:00-110:00'},
    {aula:"asx43", name: 'Tadeo del Segarra', area:"Ciencias sociales, administración y derecho" ,estado: '10:00-11:00'},
    {aula:"ax44", name: 'Juan Bautista Pedrero-Bou', area:"Psicología" ,estado: '15:00-16:00'},
    {aula:"ax45", name: 'Aurelio Dani Blanca Roura', area:"Sociología y antropología" ,estado: '08:00-09:00'},
    {aula:"ax46", name: 'Eligio Sarmiento Quiroga', area:"Comunicación y periodismo" ,estado: '11:00-12:00'},
    {aula:"ax47", name: 'Hermenegildo Bernad Julián', area:"Ciencias políticas" ,estado: '21:00-22:00'},
    {aula:"ax48", name: 'Luisa Ramón Roig', area:"Arquitectura y urbanismo" ,estado: '10:00-11:00'},
    {aula:"ax49", name: 'Pío Clemente Teruel', area:"Construcción e ingeniería civil" ,estado: '19:00-20:00'},
    {aula:"ax50", name: 'Adriana Maxi Pino Vicens', area:"Industria de la alimentación" ,estado: '15:00-16:00'},
  
  ]

  constructor() {}
  getespecialitsa(){
    return this.listaespecialista.slice();
  }
  eliminarcita(index:number){
    this.listaespecialista.splice(index,1)
  }
}
