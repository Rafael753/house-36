function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Ligar para a policia . \n 2- Procurar Paulo. ')
        if (numero == 1 ){
           window.location.href = '../html/gameover2.html';
        }else if (numero == 2){
            window.location.href ='../html/rafa4.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}