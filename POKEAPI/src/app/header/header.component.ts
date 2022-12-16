import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ids: Array<number> = new Array<number>()

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    
    for(let i=1; i<9; i++) {
      this.ids[i-1]=i;
    }
    


        this.communicationService.onData().subscribe(
          val => console.log(val)
        )

  }

}
