// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
  // var trocaArray = array.reverse()

    var trocaArray = new Array;
    for(var i = array.length-1; i >= 0; i--) {
        trocaArray.push(array[i]);
    }
    return trocaArray;

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
  function comparar(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

  var arrayOrdenado = array.sort(comparar)

  return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

  var arrayPares = array.filter(x => x % 2 === 0)

  return arrayPares;
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

  var arrayPares = array.filter(x => x % 2 === 0)
  arrayElevado = []
  for (i = 0; i < arrayPares.length; i++) {
    arrayElevado[i] = arrayPares[i] * arrayPares[i]
  }
  return arrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

  var maiorNumero = array[0];

  for (var i = 0; i < array.length; i++) {
      if (maiorNumero < array[i] ) {
          maiorNumero = array[i];
    }
}
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   
    if (num1 > num2) {
      var maior = num1
      var menor = num2
      console.log(maior)
    }
    else {
      var maior = num2
      var menor = num1
  
    }

    var compara = maior % menor === 0
    

    var difer = Math.abs(maior - menor)
   
  var objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: compara,
    diferenca: difer
  }

  return objeto


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}