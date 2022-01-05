import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PaginaService } from 'src/app/pagina.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('entrada-izq', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('entrada-derecha', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  formulario:boolean=false;
  constructor(public paginaService:PaginaService) { }

  ngOnInit(): void {
  }
cambio(){
this.formulario=true;
}
get pagina(){
  return this.paginaService.listado
}
get cambioPagina(){
 return this.paginaService.cambioListado
 
}
}
