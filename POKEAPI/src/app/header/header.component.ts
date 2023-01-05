import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ids: Array<number> = new Array<number>()

  constructor() { }

  ngOnInit(): void {

    for(let i=1; i<9; i++) {
      this.ids[i-1]=i;
    }

  }

}
