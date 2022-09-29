import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { especialista } from 'src/app/models/especialistacita';
import { EspecialistacitaService } from 'src/app/services/especialistacita.service';


 
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  listEspecialista: especialista[]=[]

 
  
  displayedColumns: string[] = ['aula', 'name', 'area', 'estado','acciones'];
 
  dataSource!:MatTableDataSource<any>;

  constructor(private _especialistaService:EspecialistacitaService) { }

  ngOnInit(): void {
    this.cargaEspecialista();
  }
  cargaEspecialista(){
    this.listEspecialista=this._especialistaService.getespecialitsa();
    this.dataSource =new MatTableDataSource(this.listEspecialista)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarcita(index:number){
    console.log(index);
    this._especialistaService.eliminarcita(index);
    this.cargaEspecialista();
  }
}
