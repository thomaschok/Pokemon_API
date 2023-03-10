import { DataService } from '../data.service';
import { Component, Input, OnChanges, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs';
import { Pokemon } from '../pokemon.service';
import { CommunicationService } from '../communication.service';
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
        private com: CommunicationService,
        private dataService: DataService
    ) {
        this.searchCtrl = new FormControl('', { validators: [Validators.required], nonNullable: true })
        this.searchForm = new UntypedFormGroup({
            search: this.searchCtrl
        })
    }

    ngOnInit(): void {
        this.dataService.getPokemons().subscribe(
            (data:any[]) => {console.log(data); this;this.pokemons = data}
        )

        this.searchCtrl.valueChanges.pipe(
          switchMap( (val: string) => this.dataService.getPokemonsContains(val,""))
          ).subscribe(
              (pokemons: Pokemon[]) => this.pokemons = pokemons
      )
      this.dataService.getPokemons().subscribe(
        pokemons => this.pokemons = pokemons
    )
      this.com.onData().pipe(
          switchMap( letter => this.dataService.getPokemonsBegin(letter,"") )
      ).subscribe(
          (pokemons : Pokemon[]) => this.pokemons = pokemons
      )

    }

    onEvent = (event: any) => {
        this.lastpokemon = event
    }
  }
