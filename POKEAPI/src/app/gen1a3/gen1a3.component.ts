import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gen1a3',
  templateUrl: './gen1a3.component.html',
  styleUrls: ['./gen1a3.component.css']
})
export class Gen1a3Component implements OnInit {

  pokemon: any

  constructor(
        private activatedRoute: ActivatedRoute,
        private dataService: DataService) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map( params => params.get('id') ?? '' ),
      switchMap( id => this.dataService.getPokemonsbyId(id) )
  ).subscribe(
    pokemon => this.pokemon = this.pokemon[0]
  )

  }

}
