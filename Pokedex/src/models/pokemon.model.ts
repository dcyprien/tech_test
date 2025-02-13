
export class Pokemon{
    constructor(public id: number,
        public name: string,
        public height: number,
        public weight: number,
        public abilities: any[],
        public species: string[],
        public type: any[],
        public front: string,
        public back: string){
    }
}