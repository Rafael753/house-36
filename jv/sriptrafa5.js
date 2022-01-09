function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Ajudar mulher . \n 2- Continuar atrás de Paulo ')
        if (numero == 1 ){
           window.location.href = '../html/gameover4.html';
        }else if (numero == 2){
            window.location.href ='../html/rafa6.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}