import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lancement',
  templateUrl: './lancement.component.html',
  styleUrls: ['./lancement.component.css']
})
export class LancementComponent implements OnInit {


  constructor(private router: Router) { }


  ngOnInit(): void {
  }


onclick() {
  this.router.navigate(['/Home']);
};



}


