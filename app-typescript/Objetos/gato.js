"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(nome) {
        this.nome = nome;
    }
    Gato.prototype.andar = function () {
        console.log("O gato ".concat(this.nome, " est\u00E1 andando"));
    };
    Gato.prototype.correr = function () {
        console.log("O gato ".concat(this.nome, " est\u00E1 correndo"));
    };
    Gato.prototype.emitirSom = function () {
        return "Miau...";
    };
    return Gato;
}());
exports.Gato = Gato;
