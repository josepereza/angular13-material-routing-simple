import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {
listado:boolean=true
  get cambioListado(){
    this.listado=!this.listado
    console.log(this.listado)
   return this.listado
  }
}
