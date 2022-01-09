function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Procurar Rafael. \n 2- Ligar para a policia. .')
        if (numero == 1 ){
           window.location.href = '../html/paulo4.html';
        }else if (numero == 2){
            window.location.href ='../html/gameover2.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}