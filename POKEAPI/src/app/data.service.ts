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

  getPokemonsByGen1(gen: string): Observable<Pokemon[]> {
    return this.http.get(this.BASE_URL + '/generation/3').pipe(
      map( (data: any) => this.objArrayPokemon(data) )
    )
}


protected objArrayPokemon(tab: any[] ): Pokemon[] {
  const arr = tab[2]
  return arr.map( (el: any) => {
      const c: Pokemon = {
          id: el.id[1],
          name: el.name[1],
      }
      return c
  })
}
}


>>>>>>> 78400be2c7e26179e6658f0393292689515732aa
