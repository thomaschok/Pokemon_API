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


