function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Cortar as cordas de seu amigo. \n 2-Tentar levantar e lutar')
        if (numero == 1 ){
           window.location.href ='../html/joão8.html';
        }else if (numero == 2){
            window.location.href ='../html/gameover6.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}