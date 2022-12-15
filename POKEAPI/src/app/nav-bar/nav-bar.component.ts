import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  letters = new Array<string>()

    constructor() { }

    ngOnInit(): void {
        for(let i=0; i<26; i++) {
            this.letters.push(String.fromCharCode(i+65))
        }
    }


}
