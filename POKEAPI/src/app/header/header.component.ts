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
        this.items.push( { name: 'generation1', display: true })
        this.items.push( { name: 'generation2 ', display: false })

        

        this.communicationService.onData().subscribe(
          val => console.log(val)
        )

  }

}
