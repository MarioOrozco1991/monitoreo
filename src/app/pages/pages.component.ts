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
export class PagesComponent {

  perfilComponentes: any;

  opcionDisponible(nombre: string) {
    //console.log('perfil componentes', this.perfilComponentes);
    if (!this.perfilComponentes) {
      this.perfilComponentes = localStorage.getItem('perfilComponentes') ? JSON.parse(localStorage.getItem('perfilComponentes')) : null;
      if (!this.perfilComponentes) {  
        return false;
      }
    }
    return this.perfilComponentes.find((perfilComponente) => perfilComponente.nombre == nombre)
  }
  
    //menu = MENU_ITEMS
    menu = MENU_ITEMS.reduce((acumulador, item) => {
      if (this.opcionDisponible(item.title)) {
        acumulador.push(item);
        return acumulador;
      }
      const subItems = (item.children || []).map(subItem => {
        if (this.opcionDisponible(subItem.title)) {
          return subItem;
        }
        const subSubItems = (subItem.children || []).filter(subSubItem => {
          if (this.opcionDisponible(subSubItem.title)) {
            return true;
          }
        });
        return subSubItems.length > 0 ? subItem : null;
      });
      const subItemsFiltrados = subItems.filter(subItem => subItem != null);
      //return subItemsFiltrados.length > 0;
      if (subItemsFiltrados.length) {
        acumulador.push({ 
          ...item,
          children: subItemsFiltrados
        });
      }
      return acumulador;
    }, []) ;
}
