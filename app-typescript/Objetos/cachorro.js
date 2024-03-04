"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
var Cachorro = /** @class */ (function () {
    function Cachorro(nome) {
        this.nome = nome;
    }
    Cachorro.prototype.andar = function () {
        console.log("O cachorro ".concat(this.nome, " est\u00E1 andando"));
    };
    Cachorro.prototype.correr = function () {
        console.log("O cachorro ".concat(this.nome, " est\u00E1 correndo"));
    };
    Cachorro.prototype.emitirSom = function () {
        return "Au au";
    };
    return Cachorro;
}());
exports.Cachorro = Cachorro;
