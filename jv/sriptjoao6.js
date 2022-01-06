function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Ir ao encontro de Rafael. \n 2- Avaliar o ambiente. ')
        if (numero == 1 ){
           window.location.href ='../html/gameover5.html';
        }else if (numero == 2){
            window.location.href ='../html/joão7.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}