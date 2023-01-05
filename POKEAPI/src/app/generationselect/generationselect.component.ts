import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { map, switchMap, tap} from 'rxjs';
import { Pokemon } from '../pokemon.service';
import { CommunicationService } from '../communication.service';


@Component({
  selector: 'app-generationselect',
  templateUrl: './generationselect.component.html',
  styleUrls: ['./generationselect.component.css']
})


export class GenerationselectComponent implements OnInit {
  lastpokemon: string = ''
  generationId: string = ''
  pokemons: Array<any> = new Array<any>()
  Pokemons: Pokemon[]=[]
  displayedPokemons: Array<any> = new Array<any>()

  searchForm: UntypedFormGroup
  searchCtrl: FormControl<string>

  constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
      private com:CommunicationService
  ) {
      this.searchCtrl = new FormControl('', { validators: [Validators.required], nonNullable: true })
      this.searchForm = new UntypedFormGroup({
          search: this.searchCtrl
      })
  }

  ngOnInit(): void {
      this.route.paramMap.pipe(
       map((param:ParamMap)=>param.get("id")??"1"),
       tap( id => this.generationId = id),
       switchMap((id:string)=>this.dataService.getPokemonsbyGen(id))
      ).subscribe(
          (pokemons) => this.pokemons=pokemons
      )

    this.searchCtrl.valueChanges.pipe(
        switchMap( (val: string) => this.dataService.getPokemonsContains(val,this.generationId))
        ).subscribe(
            (pokemons: Pokemon[]) => this.pokemons = pokemons
    )
    this.com.onData().pipe(
      switchMap( letter => this.dataService.getPokemonsBegin(letter,this.generationId) )
  ).subscribe(
      (pokemons : Pokemon[]) => this.pokemons = pokemons
  )



  }

  onEvent = (event: any) => {
      this.lastpokemon = event
  }
}
