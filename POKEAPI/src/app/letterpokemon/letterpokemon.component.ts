import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon.service';
import { DataService } from '../data.service';



@Component({
  selector: 'app-letterpokemon',
  templateUrl: './letterpokemon.component.html',
  styleUrls: ['./letterpokemon.component.css']
})
export class LetterpokemonComponent implements OnInit {

  pokemons: Pokemon[] = []
  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService)
    { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map( params => params.get('letter') ?? '' ),
      switchMap( letter => this.dataService.getPokemonsBegin(letter) )
  ).subscribe(
      pokemons => this.pokemons = pokemons
  )
  }


}
