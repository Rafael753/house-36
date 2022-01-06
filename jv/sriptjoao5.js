function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- ajudar a mulher. \n 2- continuar atrás de Rafael. ')
        if (numero == 1 ){
           window.location.href ='../html/gameover4.html';
        }else if (numero == 2){
            window.location.href ='../html/joão6.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}