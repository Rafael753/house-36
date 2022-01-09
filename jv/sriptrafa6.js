function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1-Rafael avaliou o ambiente. \n 2-Rafael Ajudou paulo. ')
        if (numero == 1 ){
           window.location.href = '../html/rafa7.html';
        }else if (numero == 2){
            window.location.href ='../html/gameover5.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
} 