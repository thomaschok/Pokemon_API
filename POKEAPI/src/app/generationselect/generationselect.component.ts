import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { map, pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-generationselect',
  templateUrl: './generationselect.component.html',
  styleUrls: ['./generationselect.component.css']
})


export class GenerationselectComponent implements OnInit {  
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
      this.route.paramMap.pipe(
       map((param:ParamMap)=>param.get("id")??"1"),
       switchMap((id:string)=>this.dataService.getPokemonsbyGen(id)) 
      ).subscribe(
          (pokemons) => this.pokemons=pokemons
      )
  }

  onEvent = (event: any) => {
      this.lastpokemon = event
  }
}
