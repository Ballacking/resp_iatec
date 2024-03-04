
//teste

import { Cachorro } from "./Objetos/cachorro";
import { Gato } from "./Objetos/Gato";

var cachorro = new Cachorro("Bob");
cachorro.correr();

var som=cachorro.emitirSom();
console.log(`Som do cachorro ${cachorro.nome} : ${som}`);

var gato = new Gato("Spike");
gato.correr();

var somGato = gato.emitirSom();
console.log(`Som do gato ${gato.nome} : ${som}`);