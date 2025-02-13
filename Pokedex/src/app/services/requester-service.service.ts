import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {
    pokemon!: Pokemon;
    constructor(private http: HttpClient) { 

    }

    async requestPokemon(pokemon: string): Promise<Pokemon>{
        await lastValueFrom(this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon + '/')
        ).then(response =>{
            const res = JSON.parse(JSON.stringify(response))
            this.pokemon = new Pokemon(res.id, res.name, res.height / 10, res.weight, res.abilities, res.species.name, res.types, res.sprites.front_default, res.sprites.back_default)
            console.log(this.pokemon);
            return this.pokemon;
        }).catch(error =>{
            console.log("Eror");
        })
        return this.pokemon
    }
}
