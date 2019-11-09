import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line: max-line-length
/// We use dependency injection when one part of our app depends on another. For example, our service depends on HttpClient to make http requests! First, we'll import HttpClient into the service. Then, we'll make it an attribute in the class


@Injectable({
  providedIn: 'root'
})



  // tslint:disable-next-line: max-line-length
  /// To invoke this function, let's call it in the constructor method of our service. This way, it will be the first thing our service will do.

export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.pokemonAbilities();
    this.overgrow();
    this.chlorophyll();
  }



  getPokemon() {
    const pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    pokemon.subscribe((data: any) => {
      console.log('Got our Pokemon!', data);
    });
  }

  pokemonAbilities() {
    const pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    pokemon.subscribe((data: any) => {
      console.log(`${data.name}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}.`);
    });
  }

  overgrow() {
    const overgrow = this._http.get('https://pokeapi.co/api/v2/ability/65/');
    overgrow.subscribe((data: any) => {
      console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability!`);
    });
  }

  chlorophyll() {
    const chlorophyll = this._http.get('https://pokeapi.co/api/v2/ability/34/');
    chlorophyll.subscribe((data: any) => {
      console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability!`);
    });
  }
}
