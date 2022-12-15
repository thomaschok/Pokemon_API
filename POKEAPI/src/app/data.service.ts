import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    //BASE_URL = '/api'
    constructor( private httpClient: HttpClient ) { }

    getPokemons(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon').pipe(
        map( (tab: any[]) => {
          const res = []
          for(let i=0; i<tab.length; i++) {
            const newElement: any = {}
            newElement['name'] = tab[i].name
            newElement['type'] = tab[i].apiTypes
            newElement['img'] = tab[i].image
            newElement['generation'] = tab[i].apiGeneration
            res.push(newElement)
          }
          return res;
        } )
      )
    }

    /*getCocktailsWithAlcool() {
        return this.cocktails.filter( el => el.alcohol )
    }

    getCocktailsWithoutAlcool() {
        return this.cocktails.filter( el => !el.alcohol )
    }*/

    /*getPokemonFiltereddByName(search: string) {
        return this.pokemons.filter( el => el.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 )
    }*/
}
