var texto: string = "";
let numero: number = 0;
const verdadeiro: boolean = false;
var date: Date=new Date();
var dinamico: any;


//Arrays
var numeros: number[]=[1,2,3,4,5,6];
var textos: string[]=["a", "b","c","d"];
var dinamicos: any[]=[1, "a", true];

enum DiaSemana{
    Segunda= 2,
    Terca= 3,
    Quarta= 4,
    Quinta= 5,
    Sexta= 6,
    Sabado= 7,
    Domingo= 1,
}

var dia = DiaSemana.Quinta;
console.log(dia); //Saída será 5

/******multiple***/

let minhaVariavel: number | string | boolean;
minhaVariavel = 12212;
minhaVariavel = "";
minhaVariavel = false;

// Criar próprio tipo

type Pessoa = {
    nome: string;
    descricao: string;    
};

var pessoa: Pessoa = { nome : "Filipe", descricao: "Futuro Dev"};
console.log(pessoa);

//Funcoes
function mostrarTexto(): string{
    return "texto";
}

function mostrarNumero(): number{
    return 123456;
}

function mostrarTexto1(texto:string): string{
    return `Texto =${texto}`;
}

function metodo(): void{
    //Faz alguma coisa
}

function exemplo(): any {
    return 123;
}

function exemploArray(): any[]{
    return [1, 2, 3, "texto"];
}


