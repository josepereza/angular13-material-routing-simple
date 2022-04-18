import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isActive:boolean=true;
  activate(){
    console.log('activate')
    this.isActive=true
}
deactivate(){
  this.isActive=false
}
}
