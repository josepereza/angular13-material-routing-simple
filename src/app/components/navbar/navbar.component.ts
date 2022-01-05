import { Component, OnInit } from '@angular/core';
import { PaginaService } from 'src/app/pagina.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public paginaService:PaginaService) { }

  ngOnInit(): void {
  }

}
