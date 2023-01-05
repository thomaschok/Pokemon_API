import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, Subscription } from 'rxjs';
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
          newElement['sprite'] = tab[i].sprite
          newElement['img'] = tab[i].image
          newElement['generation'] = tab[i].apiGeneration
          newElement['HP']=tab[i].stats.HP
          newElement['Attack']=tab[i].stats.attack
          newElement['spe_attack']=tab[i].stats.special_attack
          newElement['spe_defense']=tab[i].stats.special_defense
          newElement['Defense']=tab[i].stats.defense
          newElement['Vitesse']=tab[i].stats.speed
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
            newElement['sprite'] = tab[i].sprite
            newElement['img'] = tab[i].image
            newElement['generation'] = tab[i].apiGeneration
            newElement['HP']=tab[i].stats.HP
            newElement['Attack']=tab[i].stats.attack
            newElement['spe_attack']=tab[i].stats.special_attack
            newElement['spe_defense']=tab[i].stats.special_defense
            newElement['Defense']=tab[i].stats.defense
            newElement['Vitesse']=tab[i].stats.speed
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
            newElement['sprite'] = tab[i].sprite
            newElement['img'] = tab[i].image
            newElement['generation'] = tab[i].apiGeneration
            newElement['HP']=tab[i].stats.HP
            newElement['Attack']=tab[i].stats.attack
            newElement['spe_attack']=tab[i].stats.special_attack
            newElement['spe_defense']=tab[i].stats.special_defense
            newElement['Defense']=tab[i].stats.defense
            newElement['Vitesse']=tab[i].stats.speed
            res.push(newElement)
          }
          return res;
        } )
      )
    }
    getPokemonsContains(search: string): Observable<Pokemon[]> {
      return this.getPokemons().pipe(
          map( (cockails: Pokemon[]) => cockails.filter( (el: Pokemon) => el.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 ))
      )
  }

}
