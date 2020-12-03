import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  perfilComponentes: any;

  ngOnInit(): void {
    this.perfilComponentes = localStorage.getItem('perfilComponentes') ? JSON.parse(localStorage.getItem('perfilComponentes')) : null;
  }

  opcionDisponible(nombre: string) {
    if (!this.perfilComponentes) {
      return false;
    }
    return this.perfilComponentes.find((perfilComponente) => perfilComponente.nombre == nombre)
  }
  
     menu = MENU_ITEMS
    // menu = MENU_ITEMS.filter(item => {
    //   const subItems = item.children.filter(subItem => {
    //     const subSubItems = item.children.filter(subSubItem => {
    //       if (this.opcionDisponible(subSubItem.title)) {
    //         return true;
    //       }
    //     });
    //     return subItems.length;
    //   }) 
    // }) ;
}
