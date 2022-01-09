function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Levantar e lutar. \n 2- Cortar as cordas de Rafael. ')
        if (numero == 1 ){
           window.location.href = '../html/gameover6.html';
        }else if (numero == 2){
            window.location.href ='../html/paulo8.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}