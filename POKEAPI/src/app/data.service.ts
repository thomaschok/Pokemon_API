import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, map, Subscription } from 'rxjs';
import { Pokemon } from './pokemon.service';
=======
import { map, Observable } from 'rxjs';
>>>>>>> 6d0b6e39b95b357477b8aeef08ca525b052759f4

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

    getPokemonsbyGen1(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon/generation/1').pipe(
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

    getPokemonsbyGen2(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon/generation/2').pipe(
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

    getPokemonsbyGen3(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon/generation/3').pipe(
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


    getPokemonsbyGen4(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon/generation/4').pipe(
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


    getPokemonsbyGen5(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon/generation/5').pipe(
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



    getPokemonsbyGen6(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon/generation/6').pipe(
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



    getPokemonsbyGen7(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon/generation/7').pipe(
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




    getPokemonsbyGen8(): Observable<any[]> {
      return this.httpClient.get<any[]>('https://pokebuildapi.fr/api/v1/pokemon/generation/8').pipe(
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

    getPokemonsBegin(letter: string): Observable<Pokemon[]> {
      return this.getPokemons().pipe(
          map( (pokemons: Pokemon[]) => pokemons.filter( (el: Pokemon) => el.name.toLocaleLowerCase().indexOf(letter.toLocaleLowerCase()) === 0 ))
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
