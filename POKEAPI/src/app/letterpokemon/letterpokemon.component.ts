import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { map, switchMap,tap } from 'rxjs';
import { Pokemon } from '../pokemon.service';
import { DataService } from '../data.service';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-letterpokemon',
  templateUrl: './letterpokemon.component.html',
  styleUrls: ['./letterpokemon.component.css']
})
export class LetterpokemonComponent implements OnInit {

  pokemons: Pokemon[] = []
  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService, private com:CommunicationService)
    { }

  ngOnInit(): void {
  }


}
