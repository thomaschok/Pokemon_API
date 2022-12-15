import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  items: Array<any> = new Array<any>()

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.items.push( { name: 'home', display: true })
        this.items.push( { name: 'Gen1a3', display: true })
        this.items.push( { name: 'Gen4a6 ', display: true })
        this.items.push( { name: 'Gen7a8', display: false })

        this.communicationService.onData().subscribe(
          val => console.log(val)
        )

  }

}
