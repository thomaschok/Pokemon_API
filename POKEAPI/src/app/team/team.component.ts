import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
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
  }


  onEvent = (event: any) => {
      this.lastpokemon = event
  }


  Onclick() {
    let x:HTMLElement = document.getElementsByClassName("pokeballs")[0] as HTMLElement;
    x.style.display="none"
    this.dataService.getPokemonsbyTeam().subscribe( x=> {this.pokemons=x})
    this.route.paramMap.subscribe(
        (params) => this.displayedPokemons = this.pokemons.filter( el => params.get('letter') ? el.name[0] === params.get('letter') : true)
    )
  }

}
