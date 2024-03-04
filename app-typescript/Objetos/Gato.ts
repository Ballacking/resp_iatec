import { IAnimal } from "./IAnimal";

export class Gato implements IAnimal {
    nome: string;

    constructor(nome: string){
        this.nome=nome;
    }
    andar(): void {
        console.log(`O gato ${this.nome} está andando`);
    }
    correr(): void {
        console.log(`O gato ${this.nome} está correndo`);
    }
    emitirSom(): string {
        return "Miau...";
    }
}