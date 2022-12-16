import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[] = []
  @Output() evenOut: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  onEvent = (event: any) => {
    this.evenOut.emit(event)
}
}
