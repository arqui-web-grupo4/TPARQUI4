import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu:menu[]=[]

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarmenu();
  }
  cargarmenu(){
    this._menuService.getMenu().subscribe(data =>{
      console.log(data);
      this.menu=data;
    })
  }

}
