import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  letters = new Array<string>()

    constructor(private router: Router,private com:CommunicationService) { }

    ngOnInit(): void {
        for(let i=0; i<26; i++) {
            this.letters.push(String.fromCharCode(i+65))
        }
    }

    onClick(letter: string): void {
      this.com.pushData(letter)
    }
    displayPokemon(): void{

      this.com.pushData("")
    }
}
