import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from './pokemon.service';

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
          newElement['img'] = tab[i].image
          newElement['type'] = tab[i].apiTypes[0]
          res.push(newElement)
        }
        return res;
      } )
    )
  }

    getPokemonsbyGen(id:string): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon/generation/'+id).pipe(
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


    getPokemonsbyTeam(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/random/team').pipe(
        map( (tab: any[]) => {
          const res = []
          for(let i=0; i<6; i++) {
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

    
}
