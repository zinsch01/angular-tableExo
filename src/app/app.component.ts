import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //variable et propriete de la classe    
  title = 'table-app';
  proprietePere = 'testProprieteInputPere';
  proprieteFils;

  constructor() { 
    
  }

  addItem(event){
    console.log('*********');
    console.log(event);
    this.proprieteFils = event;
  }

}
