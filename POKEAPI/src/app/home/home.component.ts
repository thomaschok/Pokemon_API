import { DataService } from '../data.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs';
import { Pokemon } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    lastpokemon: string = ''
    Pokemons: Pokemon[]=[]
    pokemons: Array<any> = new Array<any>()
    displayedPokemons: Array<any> = new Array<any>()

    searchForm: UntypedFormGroup
    searchCtrl: FormControl<string>

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) {
        this.searchCtrl = new FormControl('', { validators: [Validators.required], nonNullable: true })
        this.searchForm = new UntypedFormGroup({
            search: this.searchCtrl
        })
    }

    ngOnInit(): void {
        this.searchCtrl.valueChanges.pipe(
          switchMap( (val: string) => this.dataService.getPokemonsContains(val))
          ).subscribe(
              (Pokemons: Pokemon[]) => this.Pokemons = Pokemons
      )
       this.route.paramMap.pipe(
          map( params => params.get('letter') ?? '' ),
          switchMap( letter => this.dataService.getPokemonsBegin(letter) )
      ).subscribe(
          pokemons => this.pokemons = pokemons
      )
    }

    onEvent = (event: any) => {
        this.lastpokemon = event
    }
}
