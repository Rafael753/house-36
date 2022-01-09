function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Ajudar a mulher. \n 2- continuar procurando Rafael.')
        if (numero == 1 ){
           window.location.href = '../html/gameover4.html';
        }else if (numero == 2){
            window.location.href ='../html/paulo6.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}