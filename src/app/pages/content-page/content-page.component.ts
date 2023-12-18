import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
    photoCover:string= ""

    contentTittle:string= ""

    contentDescription:string= ""

    constructor() { }

    ngOnInit(): void {
    }

  }

