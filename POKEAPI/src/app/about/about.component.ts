import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teamMembers = [
    { nom: 'coco', role: 'bg1' },
    { nom: 'toto', role: 'bg2' },
    { nom: 'huhu', role: 'bg3' },
    { nom: 'gogo', role: 'clodo' }
  ];

  dateLancement = new Date(2022, 12, 15);

  constructor() {
   }

  ngOnInit(): void {
  }

}
