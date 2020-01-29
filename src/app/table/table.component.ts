import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()testInput:string;
  @Output() filsPere = new EventEmitter();
 //ici variable sans type car appartiennent a la classe et pour faire du data binding
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.testInput);
    this.filsPere.emit("testEmitOutputFils");
  }

  addColumn(event){
    console.log("addColumn");
  }

  addLine(event){
    //variable d une methode et 3 type en js let, const, var -> + de memoire
    let table = document.getElementById("table");

    console.log("addLine");
    console.log(table);

    let newLine = document.createElement("tr");
    newLine.style.cssText = 'border: 1px solid black;'
    let newCell1 = document.createElement("td");
    let text1 = document.createTextNode("cell3-1");
    newCell1.appendChild(text1);
    let newCell2 = document.createElement("td");
    let text2 = document.createTextNode("cell3-2");
    newCell2.appendChild(text2);
    let newCell3 = document.createElement("td");
    let text3 = document.createTextNode("cell3-3");
    newCell3.appendChild(text3);

    newLine.appendChild(newCell1);
    newLine.appendChild(newCell2);
    newLine.appendChild(newCell3);
    table.appendChild(newLine);
    console.log(newLine);


  }

}
