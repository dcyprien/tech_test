import { Pokemon } from "./pokemon.model";

export class Ability{
    constructor(private id: number,
        private name: string,
        private pokemon: Pokemon[]
    ){}
}