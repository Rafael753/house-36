function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Buscar ajuda. \n 2- Ir para biblioteca. ')
        if (numero == 1 ){
           window.location.href = '../html/gameover3.html';
        }else if (numero == 2){
            window.location.href ='../html/rafa5.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}