import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { map, Observable } from 'rxjs';
=======
import { Observable, map, Subscription } from 'rxjs';
>>>>>>> 022b0f69ad1936b68c1c19461ec0204d1db2a4c6

@Injectable({
  providedIn: 'root'
})
export class DataService {
<<<<<<< HEAD
  //BASE_URL = '/api'
  constructor( private httpClient: HttpClient ) { }
=======
    //BASE_URL = '/api'
    constructor( private httpClient: HttpClient ) { }
>>>>>>> 022b0f69ad1936b68c1c19461ec0204d1db2a4c6


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
