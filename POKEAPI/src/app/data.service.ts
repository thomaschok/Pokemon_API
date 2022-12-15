import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, map, Subscription } from 'rxjs';
=======
import { map, Observable } from 'rxjs';
import { Pokemon } from './pokemon.service';

>>>>>>> 78400be2c7e26179e6658f0393292689515732aa

@Injectable({
  providedIn: 'root'
})
export class DataService {
<<<<<<< HEAD
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
=======

  BASE_URL = '/api'

  constructor(private http: HttpClient) { }

  getPokemonsbyId(id: string): Observable<Pokemon[]> {
    return this.http.get(this.BASE_URL + '/search.php?s=m').pipe(
        map( (data: any) => this.objArrayPokemon(data) )
    )
}


protected objArrayPokemon(obj: any): Pokemon[] {
  const arr = obj['Pokemon']
  return arr.map( (el: any) => {
      const c: Pokemon = {
          id: el.id,
          name: el.name,
      }
      return c
  })
}
}


>>>>>>> 78400be2c7e26179e6658f0393292689515732aa
