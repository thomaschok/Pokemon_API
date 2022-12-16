import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-generation1',
  templateUrl: './generation1.component.html',
  styleUrls: ['./generation1.component.css']
})

export class Generation1Component implements OnInit {

  ngOptions = [0,"Eau","Feu","Plante"]
  ngDropdown = 1;  
  lastpokemon: string = ''
  i: number = 0
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
      this.dataService.getPokemonsbyGen1().subscribe( x=> {this.pokemons=x})
      this.route.paramMap.subscribe(
          (params) => this.displayedPokemons = this.pokemons.filter( el => params.get('letter') ? el.name[0] === params.get('letter') : true)
      )
      /*this.searchCtrl.valueChanges.subscribe(
          val => this.displayedPokemons = this.dataService.getCocktailFilteredByName(val)
      )*/
  }

  onEvent = (event: any) => {
      this.lastpokemon = event
  }
}