import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})


export class BigCardComponent implements OnInit {
@Input()
photocover:string=" https://pt.wikipedia.org/wiki/Chevrolet_Opala#/media/Ficheiro:Chevrolet_Opala_SS_1978_Inca.jpg"
@Input()
cardTittle:string=""
@Input()
cardDescription:string=""
@Input()
Id:string="0"
constructor () {}
ngOnInit(): void {

}
}
