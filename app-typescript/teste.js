"use strict";
//teste
Object.defineProperty(exports, "__esModule", { value: true });
var Cachorro_1 = require("./Objetos/Cachorro");
var Gato_1 = require("./Objetos/Gato");
var cachorro = new Cachorro_1.Cachorro("Bob");
cachorro.correr();
var som = cachorro.emitirSom();
console.log("Som do cachorro ".concat(cachorro.nome, " : ").concat(som));
var gato = new Gato_1.Gato("Spike");
gato.correr();
var somGato = gato.emitirSom();
console.log("Som do gato ".concat(gato.nome, " : ").concat(som));
