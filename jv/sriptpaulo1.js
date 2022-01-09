function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Arrumar o quarto.  \n 2- Descansar.  ')
        if (numero == 1 ){
           window.location.href = '../html/paulo2.html';
        }else if (numero == 2){
            window.location.href ='../html/gameover.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}