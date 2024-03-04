var texto = "";
var numero = 0;
var verdadeiro = false;
var date = new Date();
var dinamico;
//Arrays
var numeros = [1, 2, 3, 4, 5, 6];
var textos = ["a", "b", "c", "d"];
var dinamicos = [1, "a", true];
var DiaSemana;
(function (DiaSemana) {
  DiaSemana[(DiaSemana["Segunda"] = 2)] = "Segunda";
  DiaSemana[(DiaSemana["Terca"] = 3)] = "Terca";
  DiaSemana[(DiaSemana["Quarta"] = 4)] = "Quarta";
  DiaSemana[(DiaSemana["Quinta"] = 5)] = "Quinta";
  DiaSemana[(DiaSemana["Sexta"] = 6)] = "Sexta";
  DiaSemana[(DiaSemana["Sabado"] = 7)] = "Sabado";
  DiaSemana[(DiaSemana["Domingo"] = 1)] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var dia = DiaSemana.Quinta;
console.log(dia); //Saída será 5
/******multiple***/
var minhaVariavel;
minhaVariavel = 12212;
minhaVariavel = "";
minhaVariavel = false;
var pessoa = { nome: "Filipe", descricao: "Futuro Dev" };
console.log(pessoa);
//Funcoes
function mostrarTexto() {
  return "texto";
}
function mostrarNumero() {
  return 123456;
}
function mostrarTexto1(texto) {
  return "Texto =".concat(texto);
}
function metodo() {
  //Faz alguma coisa
}
function exemplo() {
  return 123;
}
function exemploArray() {
  return [1, 2, 3, "texto"];
}
