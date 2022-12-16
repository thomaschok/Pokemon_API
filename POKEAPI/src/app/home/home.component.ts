import { DataService } from '../data.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { map, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    lastpokemon: string = ''
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
        /*this.dataService.getPokemons().subscribe( x=> {this.pokemons=x})
        this.route.paramMap.subscribe(
            (params) => this.displayedPokemons = this.pokemons.filter( el => params.get('letter') ? el.name[0] === params.get('letter') : true)
        )
        this.searchCtrl.valueChanges.subscribe(
            val => this.displayedPokemons = this.dataService.getCocktailFilteredByName(val)
        )*/
       this.route.paramMap.pipe(
          tap(x=>console.log("1",x)),
          map( params => params.get('letter') ?? '' ),
          tap(x=>console.log("2",x)),
          switchMap( letter => this.dataService.getPokemonsBegin(letter) )
      ).subscribe(
          pokemons => this.pokemons = pokemons
      )
    }

    onEvent = (event: any) => {
        this.lastpokemon = event
    }
}
