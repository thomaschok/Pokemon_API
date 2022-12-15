import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teamMembers = [
    { nom: 'Corentin TYTECA', role: 'bg1' },
    { nom: 'Thomas CHOQUELL', role: 'bg2' },
    { nom: 'Hugo GOUIRAN', role: 'Le boss du CSS' },
    { nom: 'Gauthier LANNURIEN', role: 'stagiaire' }
  ];

  dateLancement = new Date(2022, 15, 12);

  constructor() {
   }

  ngOnInit(): void {
  }

}
