import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from './pokemon.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

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


