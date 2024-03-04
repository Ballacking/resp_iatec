import { IAnimal } from "./IAnimal";

export class Cachorro implements IAnimal {
    nome: string;

    constructor(nome: string){
        this.nome=nome;
    }
    andar(): void {
        console.log(`O cachorro ${this.nome} está andando`);
    }
    correr(): void {
        console.log(`O cachorro ${this.nome} está correndo`);
    }
    emitirSom(): string {
        return "Au au";
    }
}